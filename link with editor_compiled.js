if(!lt.util.load.provided_QMARK_('lt.plugins.link-with-editor')) {
goog.provide('lt.plugins.link_with_editor');
goog.require('cljs.core');
goog.require('lt.objs.command');
goog.require('lt.object');
goog.require('lt.util.dom');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.editor.pool');
goog.require('lt.util.dom');
goog.require('lt.objs.files');
goog.require('lt.objs.sidebar.workspace');
goog.require('lt.objs.command');
goog.require('lt.objs.sidebar.workspace');
goog.require('lt.objs.files');
goog.require('lt.object');
/**
* returns an ordered list of all parents (except root) of file,
* and the file itself.
*/
lt.plugins.link_with_editor.get_parents = (function get_parents(path){var acc = cljs.core.PersistentVector.EMPTY;var x = path;while(true){
if(!(cljs.core.contains_QMARK_.call(null,lt.objs.files.get_roots.call(null),x)))
{{
var G__7844 = cljs.core.cons.call(null,x,acc);
var G__7845 = lt.objs.files.parent.call(null,x);
acc = G__7844;
x = G__7845;
continue;
}
} else
{return acc;
}
break;
}
});
/**
* opens, in the workspace view, all directories until reaching requested
* file. Applies a tag for subsequent deactivation. Also applies a CSS class
* for possible style.
*/
lt.plugins.link_with_editor.highlight = (function highlight(file){var temp__4126__auto___7846 = cljs.core.first.call(null,lt.object.by_tag.call(null,new cljs.core.Keyword(null,"linked-with-editor","linked-with-editor",643948050)));if(cljs.core.truth_(temp__4126__auto___7846))
{var obt_7847 = temp__4126__auto___7846;lt.util.dom.remove_class.call(null,new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,obt_7847)),"linked-with-editor");
} else
{}
var seq__7840_7848 = cljs.core.seq.call(null,lt.plugins.link_with_editor.get_parents.call(null,file));var chunk__7841_7849 = null;var count__7842_7850 = 0;var i__7843_7851 = 0;while(true){
if((i__7843_7851 < count__7842_7850))
{var parent_7852 = cljs.core._nth.call(null,chunk__7841_7849,i__7843_7851);var temp__4126__auto___7853 = lt.objs.sidebar.workspace.find_by_path.call(null,parent_7852);if(cljs.core.truth_(temp__4126__auto___7853))
{var sbe_7854 = temp__4126__auto___7853;lt.object.merge_BANG_.call(null,sbe_7854,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1119852199),true], null));
lt.object.raise.call(null,sbe_7854,new cljs.core.Keyword(null,"refresh!","refresh!",4597922840));
} else
{}
{
var G__7855 = seq__7840_7848;
var G__7856 = chunk__7841_7849;
var G__7857 = count__7842_7850;
var G__7858 = (i__7843_7851 + 1);
seq__7840_7848 = G__7855;
chunk__7841_7849 = G__7856;
count__7842_7850 = G__7857;
i__7843_7851 = G__7858;
continue;
}
} else
{var temp__4126__auto___7859 = cljs.core.seq.call(null,seq__7840_7848);if(temp__4126__auto___7859)
{var seq__7840_7860__$1 = temp__4126__auto___7859;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7840_7860__$1))
{var c__7121__auto___7861 = cljs.core.chunk_first.call(null,seq__7840_7860__$1);{
var G__7862 = cljs.core.chunk_rest.call(null,seq__7840_7860__$1);
var G__7863 = c__7121__auto___7861;
var G__7864 = cljs.core.count.call(null,c__7121__auto___7861);
var G__7865 = 0;
seq__7840_7848 = G__7862;
chunk__7841_7849 = G__7863;
count__7842_7850 = G__7864;
i__7843_7851 = G__7865;
continue;
}
} else
{var parent_7866 = cljs.core.first.call(null,seq__7840_7860__$1);var temp__4126__auto___7867__$1 = lt.objs.sidebar.workspace.find_by_path.call(null,parent_7866);if(cljs.core.truth_(temp__4126__auto___7867__$1))
{var sbe_7868 = temp__4126__auto___7867__$1;lt.object.merge_BANG_.call(null,sbe_7868,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1119852199),true], null));
lt.object.raise.call(null,sbe_7868,new cljs.core.Keyword(null,"refresh!","refresh!",4597922840));
} else
{}
{
var G__7869 = cljs.core.next.call(null,seq__7840_7860__$1);
var G__7870 = null;
var G__7871 = 0;
var G__7872 = 0;
seq__7840_7848 = G__7869;
chunk__7841_7849 = G__7870;
count__7842_7850 = G__7871;
i__7843_7851 = G__7872;
continue;
}
}
} else
{}
}
break;
}
var temp__4126__auto__ = lt.objs.sidebar.workspace.find_by_path.call(null,file);if(cljs.core.truth_(temp__4126__auto__))
{var sbe = temp__4126__auto__;lt.object.add_tags.call(null,sbe,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"linked-with-editor","linked-with-editor",643948050),null], null), null));
return lt.util.dom.add_class.call(null,new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,sbe)),"linked-with-editor");
} else
{return null;
}
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.link-with-editor","link-with-editor","lt.plugins.link-with-editor/link-with-editor",1852591659),new cljs.core.Keyword(null,"desc","desc",1016984067),"Link with editor",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){cljs.core._STAR_print_level_STAR_ = 5;
var active_file = new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.objs.editor.pool.last_active.call(null))));return lt.plugins.link_with_editor.highlight.call(null,active_file);
})], null));
}

//# sourceMappingURL=link with editor_compiled.js.map