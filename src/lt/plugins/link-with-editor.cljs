(ns lt.plugins.link-with-editor
  (:require [lt.object :as object]
            [lt.objs.command :as cmd]
            [lt.objs.editor.pool :as pool]
            [lt.objs.files :as files]
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

(defn highlight
  "opens, in the workspace view, all directories until reaching requested
  file. Applies a tag for subsequent deactivation. Also applies a CSS class
  for possible style."
  [file]
  (when-let [obt (first (object/by-tag :linked-with-editor))]
    (dom/remove-class (:content (deref obt)) "linked-with-editor"))
  (doseq [parent (get-parents file)]
    (when-let [sbe (sb-ws/find-by-path parent)]
      (object/merge! sbe {:open? true})
      (object/raise sbe :refresh!)))
  (when-let [sbe (sb-ws/find-by-path file)]
    (object/add-tags sbe #{:linked-with-editor})
    (dom/add-class (:content (deref sbe)) "linked-with-editor")))

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
