if(!lt.util.load.provided_QMARK_('lt.plugins.link-with-editor')) {
goog.provide('lt.plugins.link_with_editor');
goog.require('cljs.core');
goog.require('lt.objs.command');
goog.require('lt.objs.opener');
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
goog.require('lt.objs.opener');
goog.require('lt.object');
/**
* returns an ordered list of all parents (except root) of file,
* and the file itself.
*/
lt.plugins.link_with_editor.get_parents = (function get_parents(path){var acc = cljs.core.PersistentVector.EMPTY;var x = path;while(true){
if(!(cljs.core.contains_QMARK_.call(null,lt.objs.files.get_roots.call(null),x)))
{{
var G__8715 = cljs.core.cons.call(null,x,acc);
var G__8716 = lt.objs.files.parent.call(null,x);
acc = G__8715;
x = G__8716;
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
lt.plugins.link_with_editor.highlight = (function highlight(file){var seq__8707_8717 = cljs.core.seq.call(null,lt.object.by_tag.call(null,new cljs.core.Keyword(null,"linked-with-editor","linked-with-editor",643948050)));var chunk__8708_8718 = null;var count__8709_8719 = 0;var i__8710_8720 = 0;while(true){
if((i__8710_8720 < count__8709_8719))
{var obt_8721 = cljs.core._nth.call(null,chunk__8708_8718,i__8710_8720);lt.util.dom.remove_class.call(null,new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,obt_8721)),"linked-with-editor");
lt.object.raise.call(null,obt_8721,new cljs.core.Keyword(null,"refresh!","refresh!",4597922840));
{
var G__8722 = seq__8707_8717;
var G__8723 = chunk__8708_8718;
var G__8724 = count__8709_8719;
var G__8725 = (i__8710_8720 + 1);
seq__8707_8717 = G__8722;
chunk__8708_8718 = G__8723;
count__8709_8719 = G__8724;
i__8710_8720 = G__8725;
continue;
}
} else
{var temp__4126__auto___8726 = cljs.core.seq.call(null,seq__8707_8717);if(temp__4126__auto___8726)
{var seq__8707_8727__$1 = temp__4126__auto___8726;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8707_8727__$1))
{var c__7121__auto___8728 = cljs.core.chunk_first.call(null,seq__8707_8727__$1);{
var G__8729 = cljs.core.chunk_rest.call(null,seq__8707_8727__$1);
var G__8730 = c__7121__auto___8728;
var G__8731 = cljs.core.count.call(null,c__7121__auto___8728);
var G__8732 = 0;
seq__8707_8717 = G__8729;
chunk__8708_8718 = G__8730;
count__8709_8719 = G__8731;
i__8710_8720 = G__8732;
continue;
}
} else
{var obt_8733 = cljs.core.first.call(null,seq__8707_8727__$1);lt.util.dom.remove_class.call(null,new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,obt_8733)),"linked-with-editor");
lt.object.raise.call(null,obt_8733,new cljs.core.Keyword(null,"refresh!","refresh!",4597922840));
{
var G__8734 = cljs.core.next.call(null,seq__8707_8727__$1);
var G__8735 = null;
var G__8736 = 0;
var G__8737 = 0;
seq__8707_8717 = G__8734;
chunk__8708_8718 = G__8735;
count__8709_8719 = G__8736;
i__8710_8720 = G__8737;
continue;
}
}
} else
{}
}
break;
}
var seq__8711_8738 = cljs.core.seq.call(null,lt.plugins.link_with_editor.get_parents.call(null,file));var chunk__8712_8739 = null;var count__8713_8740 = 0;var i__8714_8741 = 0;while(true){
if((i__8714_8741 < count__8713_8740))
{var parent_8742 = cljs.core._nth.call(null,chunk__8712_8739,i__8714_8741);var temp__4126__auto___8743 = lt.objs.sidebar.workspace.find_by_path.call(null,parent_8742);if(cljs.core.truth_(temp__4126__auto___8743))
{var sbe_8744 = temp__4126__auto___8743;if(cljs.core._EQ_.call(null,new cljs.core.Keyword("lt.objs.sidebar.workspace","workspace.folder","lt.objs.sidebar.workspace/workspace.folder",1951235275),new cljs.core.Keyword("lt.object","type","lt.object/type",701613666).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,sbe_8744))))
{if(cljs.core.not.call(null,new cljs.core.Keyword(null,"open?","open?",1119852199).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,sbe_8744))))
{lt.object.raise.call(null,sbe_8744,new cljs.core.Keyword(null,"open!","open!",1119852169));
cljs.core.println.call(null,"A5 now open",new cljs.core.Keyword(null,"open?","open?",1119852199).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,sbe_8744)));
lt.object.raise.call(null,sbe_8744,new cljs.core.Keyword(null,"refresh!","refresh!",4597922840));
} else
{cljs.core.println.call(null,"already open ",new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,sbe_8744)));
}
} else
{}
} else
{}
{
var G__8745 = seq__8711_8738;
var G__8746 = chunk__8712_8739;
var G__8747 = count__8713_8740;
var G__8748 = (i__8714_8741 + 1);
seq__8711_8738 = G__8745;
chunk__8712_8739 = G__8746;
count__8713_8740 = G__8747;
i__8714_8741 = G__8748;
continue;
}
} else
{var temp__4126__auto___8749 = cljs.core.seq.call(null,seq__8711_8738);if(temp__4126__auto___8749)
{var seq__8711_8750__$1 = temp__4126__auto___8749;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8711_8750__$1))
{var c__7121__auto___8751 = cljs.core.chunk_first.call(null,seq__8711_8750__$1);{
var G__8752 = cljs.core.chunk_rest.call(null,seq__8711_8750__$1);
var G__8753 = c__7121__auto___8751;
var G__8754 = cljs.core.count.call(null,c__7121__auto___8751);
var G__8755 = 0;
seq__8711_8738 = G__8752;
chunk__8712_8739 = G__8753;
count__8713_8740 = G__8754;
i__8714_8741 = G__8755;
continue;
}
} else
{var parent_8756 = cljs.core.first.call(null,seq__8711_8750__$1);var temp__4126__auto___8757__$1 = lt.objs.sidebar.workspace.find_by_path.call(null,parent_8756);if(cljs.core.truth_(temp__4126__auto___8757__$1))
{var sbe_8758 = temp__4126__auto___8757__$1;if(cljs.core._EQ_.call(null,new cljs.core.Keyword("lt.objs.sidebar.workspace","workspace.folder","lt.objs.sidebar.workspace/workspace.folder",1951235275),new cljs.core.Keyword("lt.object","type","lt.object/type",701613666).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,sbe_8758))))
{if(cljs.core.not.call(null,new cljs.core.Keyword(null,"open?","open?",1119852199).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,sbe_8758))))
{lt.object.raise.call(null,sbe_8758,new cljs.core.Keyword(null,"open!","open!",1119852169));
cljs.core.println.call(null,"A5 now open",new cljs.core.Keyword(null,"open?","open?",1119852199).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,sbe_8758)));
lt.object.raise.call(null,sbe_8758,new cljs.core.Keyword(null,"refresh!","refresh!",4597922840));
} else
{cljs.core.println.call(null,"already open ",new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,sbe_8758)));
}
} else
{}
} else
{}
{
var G__8759 = cljs.core.next.call(null,seq__8711_8750__$1);
var G__8760 = null;
var G__8761 = 0;
var G__8762 = 0;
seq__8711_8738 = G__8759;
chunk__8712_8739 = G__8760;
count__8713_8740 = G__8761;
i__8714_8741 = G__8762;
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
lt.util.dom.add_class.call(null,new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,sbe)),"linked-with-editor");
return lt.object.raise.call(null,sbe,new cljs.core.Keyword(null,"refresh!","refresh!",4597922840));
} else
{return null;
}
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.link-with-editor","link-with-editor","lt.plugins.link-with-editor/link-with-editor",1852591659),new cljs.core.Keyword(null,"desc","desc",1016984067),"Link with editor",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){cljs.core._STAR_print_level_STAR_ = 5;
var active_file = new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.objs.editor.pool.last_active.call(null))));return lt.plugins.link_with_editor.highlight.call(null,active_file);
})], null));
}

//# sourceMappingURL=link with editor_compiled.js.map