(ns lt.plugins.link-with-editor
  (:require [lt.object :as object]
            [lt.objs.command :as cmd]
            [lt.objs.editor.pool :as pool]
            [lt.objs.files :as files]
            [lt.objs.opener :as opener]
            [lt.objs.sidebar.workspace :as sb-ws]
            [lt.util.dom :as dom]))

(defn get-parents
  "returns an ordered list of all parents (except root) of file,
  and the file itself."
  [path]
  (loop [acc [] x path]
    (if-not (contains? (files/get-roots) x)
      (recur (cons x acc) (files/parent x))
      acc)))

;(println (sb-ws/find-by-path "/home/olivier/dev/clj/oba/lt-link-with-editor/src/lt/plugins"))

;(object/raise (sb-ws/find-by-path "/home/olivier/dev/clj/oba/lt-link-with-editor")
 ;             :open!)

 (defn highlight
  "opens, in the workspace view, all directories until reaching requested
  file. Applies a tag for subsequent deactivation. Also applies a CSS class
  for possible style."
  [file]
  (doseq [obt (object/by-tag :linked-with-editor)]
    (dom/remove-class (:content @obt) "linked-with-editor")
    (object/raise obt :refresh!))
  (doseq [parent (get-parents file)]
    (when-let [sbe (sb-ws/find-by-path parent)]
      (when (= :lt.objs.sidebar.workspace/workspace.folder (:lt.object/type @sbe))
        (if-not (:open? @sbe)
          (do (object/raise sbe :open!)
            (println "A5 now open" (:open? @sbe))
            (object/raise sbe :refresh!))
          (println "already open " (:path @sbe))
        )
        ;(object/merge! sbe {:open? true})
        ;(object/raise sbe :open!) ; au lieu de refresh!
        )))
  (when-let [sbe (sb-ws/find-by-path file)]
    (object/add-tags sbe #{:linked-with-editor})
    (dom/add-class (:content @sbe) "linked-with-editor")
    (object/raise sbe :refresh!)))

(cmd/command {:command ::link-with-editor
              :desc "Link with editor"
              :exec (fn []
                      ; avoid 'maximum call stack size exceeded' when debugging
                      (set! *print-level* 5)
                      (let [active-file (-> (pool/last-active)
                                            deref
                                            :info
                                            :path)]
                        (highlight active-file)))})
