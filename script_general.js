(function(){
var translateObjs = {};
function trans(a, b) {
    var c = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    translateObjs[c[0x0]] = c;
    return '';
}
function regTextVar(a, b) {
    var c = ![];
    b = b['toLowerCase']();
    var d = function () {
        var m = this['get']('data');
        m['updateText'](m['translateObjs'][a]);
    };
    var e = function (m) {
        var n = m['data']['nextSelectedIndex'];
        if (n >= 0x0) {
            var o = m['source']['get']('items')[n];
            var p = function () {
                o['unbind']('start', p, this);
                d['call'](this);
            };
            o['bind']('start', p, this);
        } else
            d['call'](this);
    };
    var f = function (m) {
        return function (n) {
            if (m in n) {
                d['call'](this);
            }
        }['bind'](this);
    };
    var g = function (m, n) {
        return function (o, p) {
            if (m == o && n in p) {
                d['call'](this);
            }
        }['bind'](this);
    };
    var h = function (m, n, o) {
        for (var p = 0x0; p < m['length']; ++p) {
            var q = m[p];
            var r = q['get']('selectedIndex');
            if (r >= 0x0) {
                var s = n['split']('.');
                var t = q['get']('items')[r];
                if (o !== undefined && !o['call'](this, t))
                    continue;
                for (var u = 0x0; u < s['length']; ++u) {
                    if (t == undefined)
                        return '';
                    t = 'get' in t ? t['get'](s[u]) : t[s[u]];
                }
                return t;
            }
        }
        return '';
    };
    var i = function (m) {
        var n = m['get']('player');
        return n !== undefined && n['get']('viewerArea') == this['getMainViewer']();
    };
    switch (b) {
    case 'title':
    case 'subtitle':
        var k = function () {
            switch (b) {
            case 'title':
                return 'media.label';
            case 'subtitle':
                return 'media.data.subtitle';
            }
        }();
        if (k) {
            return function () {
                var m = this['_getPlayListsWithViewer'](this['getMainViewer']());
                if (!c) {
                    for (var n = 0x0; n < m['length']; ++n) {
                        m[n]['bind']('changing', e, this);
                    }
                    c = !![];
                }
                return h['call'](this, m, k, i);
            };
        }
        break;
    default:
        if (b['startsWith']('quiz.') && 'Quiz' in TDV) {
            var l = undefined;
            var k = function () {
                switch (b) {
                case 'quiz.questions.answered':
                    return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                case 'quiz.question.count':
                    return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                case 'quiz.items.found':
                    return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                case 'quiz.item.count':
                    return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                case 'quiz.score':
                    return TDV['Quiz']['PROPERTY']['SCORE'];
                case 'quiz.score.total':
                    return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                case 'quiz.time.remaining':
                    return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                case 'quiz.time.elapsed':
                    return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                case 'quiz.time.limit':
                    return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                case 'quiz.media.items.found':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                case 'quiz.media.item.count':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                case 'quiz.media.questions.answered':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                case 'quiz.media.question.count':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                case 'quiz.media.score':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                case 'quiz.media.score.total':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                case 'quiz.media.index':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                case 'quiz.media.count':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                case 'quiz.media.visited':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                default:
                    var m = /quiz\.([\w_]+)\.(.+)/['exec'](b);
                    if (m) {
                        l = m[0x1];
                        switch ('quiz.' + m[0x2]) {
                        case 'quiz.score':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                        case 'quiz.score.total':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                        case 'quiz.media.items.found':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                        case 'quiz.media.item.count':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                        case 'quiz.media.questions.answered':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                        case 'quiz.media.question.count':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                        case 'quiz.questions.answered':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                        case 'quiz.question.count':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                        case 'quiz.items.found':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                        case 'quiz.item.count':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                        case 'quiz.media.score':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                        case 'quiz.media.score.total':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                        }
                    }
                }
            }();
            if (k) {
                return function () {
                    var m = this['get']('data')['quiz'];
                    if (m) {
                        if (!c) {
                            if (l != undefined)
                                if (l == 'global') {
                                    var o = this['get']('data')['quizConfig'];
                                    var q = o['objectives'];
                                    for (var s = 0x0, u = q['length']; s < u; ++s) {
                                        m['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], g['call'](this, q[s]['id'], k), this);
                                    }
                                } else {
                                    m['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], g['call'](this, l, k), this);
                                }
                            else
                                m['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], f['call'](this, k), this);
                            c = !![];
                        }
                        try {
                            var v = 0x0;
                            if (l != undefined) {
                                if (l == 'global') {
                                    var o = this['get']('data')['quizConfig'];
                                    var q = o['objectives'];
                                    for (var s = 0x0, u = q['length']; s < u; ++s) {
                                        v += m['getObjective'](q[s]['id'], k);
                                    }
                                } else {
                                    v = m['getObjective'](l, k);
                                }
                            } else {
                                v = m['get'](k);
                                if (k == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                    v += 0x1;
                            }
                            return v;
                        } catch (w) {
                            return undefined;
                        }
                    }
                };
            }
        }
        break;
    }
    return '';
}
function createQuizConfig(player, a) {
    var b = {};
    b['player'] = player;
    b['playList'] = a;
    function c(f) {
        for (var g = 0x0; g < f['length']; ++g) {
            var h = f[g];
            if ('id' in h)
                player[h['id']] = h;
        }
    }
    if (b['questions']) {
        c(b['questions']);
        for (var d = 0x0; d < b['questions']['length']; ++d) {
            var e = b['questions'][d];
            c(e['options']);
        }
    }
    if (b['objectives']) {
        c(b['objectives']);
    }
    if (b['califications']) {
        c(b['califications']);
    }
    if (b['score']) {
        player[b['score']['id']] = b['score'];
    }
    if (b['question']) {
        player[b['question']['id']] = b['question'];
    }
    if (b['timeout']) {
        player[b['timeout']['id']] = b['timeout'];
    }
    player['get']('data')['translateObjs'] = translateObjs;
    return b;
}
var script = {"start":"this.playAudioList([this.audio_DC5FC25C_C8AA_0277_41E5_EFBFA18E5C8E], true); this.init()","class":"Player","borderRadius":0,"gap":10,"borderSize":0,"width":"100%","paddingLeft":0,"paddingTop":0,"id":"rootPlayer","mouseWheelEnabled":true,"horizontalAlign":"left","desktopMipmappingEnabled":false,"buttonToggleMute":"this.IconButton_D8133E8D_CC90_71C8_41DC_B2E95B86621E","paddingBottom":0,"paddingRight":0,"defaultMenu":["fullscreen","mute","rotation"],"backgroundColorRatios":[0],"scrollBarMargin":2,"verticalAlign":"top","backgroundOpacity":1,"vrPolyfillScale":0.75,"contentOpaque":false,"scripts":{"executeJS":TDV.Tour.Script.executeJS,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"showPopupImage":TDV.Tour.Script.showPopupImage,"getKey":TDV.Tour.Script.getKey,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"getMainViewer":TDV.Tour.Script.getMainViewer,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"setMapLocation":TDV.Tour.Script.setMapLocation,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"openLink":TDV.Tour.Script.openLink,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"clone":TDV.Tour.Script.clone,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"init":TDV.Tour.Script.init,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"registerKey":TDV.Tour.Script.registerKey,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"quizShowScore":TDV.Tour.Script.quizShowScore,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"existsKey":TDV.Tour.Script.existsKey,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"getMediaByName":TDV.Tour.Script.getMediaByName,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"showWindow":TDV.Tour.Script.showWindow,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"initQuiz":TDV.Tour.Script.initQuiz,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"downloadFile":TDV.Tour.Script.downloadFile,"cloneCamera":TDV.Tour.Script.cloneCamera,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"playAudioList":TDV.Tour.Script.playAudioList,"quizStart":TDV.Tour.Script.quizStart,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"cloneBindings":TDV.Tour.Script.cloneBindings,"initAnalytics":TDV.Tour.Script.initAnalytics,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"resumePlayers":TDV.Tour.Script.resumePlayers,"shareSocial":TDV.Tour.Script.shareSocial,"getPixels":TDV.Tour.Script.getPixels,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"setLocale":TDV.Tour.Script.setLocale,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"quizFinish":TDV.Tour.Script.quizFinish,"setValue":TDV.Tour.Script.setValue,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"getOverlays":TDV.Tour.Script.getOverlays,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"mixObject":TDV.Tour.Script.mixObject,"textToSpeech":TDV.Tour.Script.textToSpeech,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"getComponentByName":TDV.Tour.Script.getComponentByName,"isPanorama":TDV.Tour.Script.isPanorama,"historyGoBack":TDV.Tour.Script.historyGoBack,"unregisterKey":TDV.Tour.Script.unregisterKey,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"historyGoForward":TDV.Tour.Script.historyGoForward,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"translate":TDV.Tour.Script.translate,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode},"toolTipHorizontalAlign":"center","height":"100%","backgroundColor":["#FFFFFF"],"defaultVRPointer":"laser","layout":"absolute","overflow":"hidden","scrollBarOpacity":0.5,"backgroundPreloadEnabled":true,"definitions": [{"hoverFactor":0,"idleSequence":"this.sequence_C2CF15EE_C86E_0653_41E1_2940656C448B","manualRotationSpeed":200,"timeToIdle":5000,"class":"PanoramaCamera","automaticZoomSpeed":10,"manualZoomSpeed":4,"initialPosition":{"hfov":110,"yaw":2.82,"pitch":-13.52,"class":"PanoramaCameraPosition"},"initialSequence":"this.sequence_C2CF15EE_C86E_0653_41E1_2940656C448B","id":"panorama_C2E7589D_C86E_0EF1_41DD_6F195C9F72A5_camera"},{"class":"IconButton","borderRadius":0,"borderSize":0,"width":59,"iconURL":"skin/IconButton_DB03A7E7_CC90_BF78_41D8_9CFFF60598EF.png","cursor":"hand","paddingLeft":0,"paddingTop":0,"id":"IconButton_DB03A7E7_CC90_BF78_41D8_9CFFF60598EF","horizontalAlign":"center","paddingBottom":0,"paddingRight":0,"backgroundColorRatios":[],"verticalAlign":"middle","backgroundOpacity":0.3,"toolTipHorizontalAlign":"center","height":44,"backgroundColor":[],"click":"this.openLink(this.translate('LinkBehaviour_D89E6B87_CCB7_97B8_41E5_205DFDABB76D.source'), '_blank')","transparencyActive":true,"mode":"push","minHeight":1,"propagateClick":false,"minWidth":1,"shadow":false,"backgroundColorDirection":"vertical","data":{"name":"LOCALIZA\u00c7\u00c3O"}},{"class":"IconButton","borderRadius":0,"borderSize":0,"width":81,"iconURL":"skin/IconButton_DB38DCE6_CC90_B179_41B1_0CD7787BECFB.png","cursor":"hand","paddingLeft":0,"paddingTop":0,"id":"IconButton_DB38DCE6_CC90_B179_41B1_0CD7787BECFB","horizontalAlign":"center","paddingBottom":0,"paddingRight":0,"backgroundColorRatios":[],"verticalAlign":"middle","backgroundOpacity":0.3,"toolTipHorizontalAlign":"center","height":44,"backgroundColor":[],"click":"this.openLink(this.translate('LinkBehaviour_DBC21460_CC90_9179_41C7_1BF30DBC5109.source'), '_blank')","transparencyActive":true,"mode":"push","minHeight":1,"propagateClick":false,"minWidth":1,"shadow":false,"backgroundColorDirection":"vertical","data":{"name":"FACEBOOK"}},{"items":[{"player":"this.MainViewerPanoramaPlayer","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)","camera":"this.panorama_C4A88A0D_C86E_0DD3_41D9_19767F062A98_camera","class":"PanoramaPlayListItem","media":"this.panorama_C4A88A0D_C86E_0DD3_41D9_19767F062A98"},{"player":"this.MainViewerPanoramaPlayer","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 0)","class":"PanoramaPlayListItem","media":"this.panorama_C2E7589D_C86E_0EF1_41DD_6F195C9F72A5","camera":"this.panorama_C2E7589D_C86E_0EF1_41DD_6F195C9F72A5_camera","end":"this.trigger('tourEnded')"}],"class":"PlayList","id":"mainPlayList"},{"class":"MediaAudio","loop":false,"audio":"this.audiores_DC9B6123_C896_3FD1_41E0_B6CA68DB39CB","data":{"label":"Audio Final"},"autoplay":true,"id":"audio_DC5FC25C_C8AA_0277_41E5_EFBFA18E5C8E"},{"video":"this.videores_D93BB065_CCF7_917B_41D2_F77015C5FE24","class":"Video","loop":false,"height":720,"width":1280,"thumbnailUrl":"media/video_D8D4423A_CCF0_B0C9_41E7_9AAF6478406B_t.jpg","id":"video_D8D4423A_CCF0_B0C9_41E7_9AAF6478406B","label":trans('video_D8D4423A_CCF0_B0C9_41E7_9AAF6478406B.label'),"data":{"label":"BROLL BARBER"},"scaleMode":"fit_inside"},{"viewerArea":"this.MainViewer","zoomEnabled":true,"class":"PanoramaPlayer","aaEnabled":true,"arrowKeysAction":"translate","touchControlMode":"drag_rotation","mouseControlMode":"drag_rotation","displayPlaybackBar":true,"gyroscopeVerticalDraggingEnabled":true,"surfaceSelectionEnabled":false,"id":"MainViewerPanoramaPlayer"},{"viewerArea":"this.MainViewer","class":"VideoPlayer","displayPlaybackBar":true,"clickAction":"play_pause","displayPlayOverlay":true,"id":"MainViewerVideoPlayer"},{"class":"IconButton","borderRadius":0,"borderSize":0,"width":53,"iconURL":"skin/IconButton_D81BBA28_CC91_90C8_41DA_458D608914B0.png","cursor":"hand","paddingLeft":0,"paddingTop":0,"id":"IconButton_D81BBA28_CC91_90C8_41DA_458D608914B0","horizontalAlign":"center","paddingBottom":0,"paddingRight":0,"backgroundColorRatios":[],"verticalAlign":"middle","backgroundOpacity":0.3,"toolTipHorizontalAlign":"center","height":45,"backgroundColor":[],"click":"this.openLink(this.translate('LinkBehaviour_DAD47D7D_CCB1_9348_41C8_5AA2AE4C6CB2.source'), '_blank')","transparencyActive":true,"mode":"push","minHeight":1,"propagateClick":false,"minWidth":1,"shadow":false,"backgroundColorDirection":"vertical","data":{"name":"INSTAGRAM"}},{"class":"IconButton","borderRadius":0,"borderSize":0,"width":48,"iconURL":"skin/IconButton_D8133E8D_CC90_71C8_41DC_B2E95B86621E.png","cursor":"hand","paddingLeft":0,"paddingTop":0,"id":"IconButton_D8133E8D_CC90_71C8_41DC_B2E95B86621E","horizontalAlign":"center","paddingBottom":0,"paddingRight":0,"verticalAlign":"middle","backgroundOpacity":0,"toolTipHorizontalAlign":"center","height":40,"pressedIconURL":"skin/IconButton_D8133E8D_CC90_71C8_41DC_B2E95B86621E_pressed.png","transparencyActive":true,"mode":"toggle","rollOverIconURL":"skin/IconButton_D8133E8D_CC90_71C8_41DC_B2E95B86621E_rollover.png","minHeight":0,"propagateClick":false,"minWidth":0,"shadow":false,"data":{"name":"MUDO"}},{"class":"Panorama","data":{"label":"Entrada"},"adjacentPanoramas":[{"distance":32.16,"yaw":-17.43,"select":"this.overlay_DA06EEFB_C8AA_0231_41C1_D7AC4C3F5589.get('areas').forEach(function(a){ a.trigger('click') })","data":{"overlayID":"overlay_DA06EEFB_C8AA_0231_41C1_D7AC4C3F5589"},"class":"AdjacentPanorama","panorama":"this.panorama_C2E7589D_C86E_0EF1_41DD_6F195C9F72A5"}],"partial":false,"overlays":["this.overlay_DA06EEFB_C8AA_0231_41C1_D7AC4C3F5589","this.panorama_C4A88A0D_C86E_0DD3_41D9_19767F062A98_tcap0","this.overlay_DF16F600_CCF3_90B9_41D5_BF687021524D"],"pitch":0,"id":"panorama_C4A88A0D_C86E_0DD3_41D9_19767F062A98","thumbnailUrl":"media/panorama_C4A88A0D_C86E_0DD3_41D9_19767F062A98_t.jpg","hfovMin":"135%","label":trans('panorama_C4A88A0D_C86E_0DD3_41D9_19767F062A98.label'),"hfovMax":130,"frames":[{"thumbnailUrl":"media/panorama_C4A88A0D_C86E_0DD3_41D9_19767F062A98_t.jpg","class":"CubicPanoramaFrame","cube":{"class":"ImageResource","levels":[{"width":12288,"rowCount":4,"url":"media/panorama_C4A88A0D_C86E_0DD3_41D9_19767F062A98_0/{face}/0/{row}_{column}.jpg","class":"TiledImageResourceLevel","height":2048,"colCount":24,"tags":"ondemand"},{"width":6144,"rowCount":2,"url":"media/panorama_C4A88A0D_C86E_0DD3_41D9_19767F062A98_0/{face}/1/{row}_{column}.jpg","class":"TiledImageResourceLevel","height":1024,"colCount":12,"tags":"ondemand"},{"width":3072,"rowCount":1,"url":"media/panorama_C4A88A0D_C86E_0DD3_41D9_19767F062A98_0/{face}/2/{row}_{column}.jpg","class":"TiledImageResourceLevel","height":512,"colCount":6,"tags":["ondemand","preload"]},{"width":9216,"rowCount":1,"url":"media/panorama_C4A88A0D_C86E_0DD3_41D9_19767F062A98_0/{face}/vr/0.jpg","class":"TiledImageResourceLevel","height":1536,"colCount":6,"tags":"mobilevr"},{"width":12288,"rowCount":1,"url":"media/panorama_C4A88A0D_C86E_0DD3_41D9_19767F062A98_0/{face}/vr2gen/0.jpg","class":"TiledImageResourceLevel","height":2048,"colCount":6,"tags":"mobilevr2gen"}]}}],"hfov":360,"vfov":180},{"hoverFactor":0,"displayMovements":[{"easing":"linear","duration":1000,"class":"TargetRotationalCameraDisplayMovement"},{"easing":"cubic_in_out","targetPitch":-2.53,"class":"TargetRotationalCameraDisplayMovement","duration":3000,"targetHfov":86,"targetStereographicFactor":0}],"class":"PanoramaCamera","displayOriginPosition":{"hfov":165,"stereographicFactor":1,"yaw":-2.63,"pitch":-90,"class":"RotationalCameraDisplayPosition"},"automaticZoomSpeed":10,"initialSequence":"this.sequence_C2F385EC_C86E_0657_41C7_025DB82EBEBD","idleSequence":"this.sequence_C2F385EC_C86E_0657_41C7_025DB82EBEBD","manualRotationSpeed":200,"timeToIdle":5000,"manualZoomSpeed":4,"initialPosition":{"hfov":86,"yaw":-2.63,"pitch":-2.53,"class":"PanoramaCameraPosition"},"id":"panorama_C4A88A0D_C86E_0DD3_41D9_19767F062A98_camera"},{"class":"IconButton","borderRadius":0,"borderSize":0,"width":54,"iconURL":"skin/IconButton_DB6326CB_CC90_9148_41E4_4C1D578ED49B.png","cursor":"hand","paddingLeft":0,"paddingTop":0,"id":"IconButton_DB6326CB_CC90_9148_41E4_4C1D578ED49B","horizontalAlign":"center","paddingBottom":0,"paddingRight":0,"backgroundColorRatios":[],"verticalAlign":"middle","backgroundOpacity":0.3,"toolTipHorizontalAlign":"center","height":46,"backgroundColor":[],"click":"this.openLink(this.translate('LinkBehaviour_D83F8502_CCB0_90B9_4197_090D7091AABA.source'), '_blank')","transparencyActive":true,"mode":"push","minHeight":1,"propagateClick":false,"minWidth":1,"shadow":false,"backgroundColorDirection":"vertical","data":{"name":"WHATSAPP"}},{"class":"Panorama","data":{"label":"Parte interna"},"partial":false,"overlays":["this.panorama_C2E7589D_C86E_0EF1_41DD_6F195C9F72A5_tcap0","this.overlay_DBDAE4BB_C8AE_0631_41D4_A0344BA3C6C0","this.overlay_DBC2EC98_C8AA_06FF_41DA_457BDA643FB1","this.overlay_DE96EEE8_CCF1_B148_41E3_BD6BAAB3D2E3","this.overlay_D6985C65_CC90_B17B_41B1_8DA5D95E0FE0"],"pitch":0,"id":"panorama_C2E7589D_C86E_0EF1_41DD_6F195C9F72A5","thumbnailUrl":"media/panorama_C2E7589D_C86E_0EF1_41DD_6F195C9F72A5_t.jpg","hfovMin":"135%","label":trans('panorama_C2E7589D_C86E_0EF1_41DD_6F195C9F72A5.label'),"hfovMax":130,"frames":[{"thumbnailUrl":"media/panorama_C2E7589D_C86E_0EF1_41DD_6F195C9F72A5_t.jpg","class":"CubicPanoramaFrame","cube":{"class":"ImageResource","levels":[{"width":12288,"rowCount":4,"url":"media/panorama_C2E7589D_C86E_0EF1_41DD_6F195C9F72A5_0/{face}/0/{row}_{column}.jpg","class":"TiledImageResourceLevel","height":2048,"colCount":24,"tags":"ondemand"},{"width":6144,"rowCount":2,"url":"media/panorama_C2E7589D_C86E_0EF1_41DD_6F195C9F72A5_0/{face}/1/{row}_{column}.jpg","class":"TiledImageResourceLevel","height":1024,"colCount":12,"tags":"ondemand"},{"width":3072,"rowCount":1,"url":"media/panorama_C2E7589D_C86E_0EF1_41DD_6F195C9F72A5_0/{face}/2/{row}_{column}.jpg","class":"TiledImageResourceLevel","height":512,"colCount":6,"tags":["ondemand","preload"]},{"width":9216,"rowCount":1,"url":"media/panorama_C2E7589D_C86E_0EF1_41DD_6F195C9F72A5_0/{face}/vr/0.jpg","class":"TiledImageResourceLevel","height":1536,"colCount":6,"tags":"mobilevr"},{"width":12288,"rowCount":1,"url":"media/panorama_C2E7589D_C86E_0EF1_41DD_6F195C9F72A5_0/{face}/vr2gen/0.jpg","class":"TiledImageResourceLevel","height":2048,"colCount":6,"tags":"mobilevr2gen"}]}}],"hfov":360,"vfov":180},{"toolTipPaddingTop":4,"propagateClick":false,"toolTipBorderSize":1,"class":"ViewerArea","progressBackgroundColorDirection":"vertical","toolTipTextShadowColor":"#000000","playbackBarProgressBackgroundColorDirection":"vertical","subtitlesEnabled":true,"progressLeft":0,"paddingLeft":0,"id":"MainViewer","subtitlesFontColor":"#FFFFFF","playbackBarBackgroundColor":["#FFFFFF"],"progressBackgroundOpacity":1,"playbackBarHeadBackgroundColorDirection":"vertical","subtitlesTextDecoration":"none","playbackBarHeight":10,"playbackBarHeadWidth":6,"surfaceReticleOpacity":0.6,"paddingRight":0,"surfaceReticleColor":"#FFFFFF","playbackBarProgressBorderSize":0,"toolTipShadowColor":"#333138","subtitlesTextShadowBlurRadius":0,"progressBorderColor":"#000000","width":"100%","playbackBarBackgroundColorDirection":"vertical","toolTipPaddingRight":6,"toolTipTextShadowOpacity":0,"toolTipFontFamily":"Arial","playbackBarRight":0,"vrPointerSelectionTime":2000,"subtitlesFontFamily":"Arial","toolTipShadowVerticalLength":0,"vrPointerSelectionColor":"#FF6600","toolTipHorizontalAlign":"center","height":"100%","toolTipFontColor":"#606060","progressBarBackgroundColor":["#3399FF"],"transitionDuration":500,"progressBackgroundColor":["#FFFFFF"],"progressBarOpacity":1,"toolTipDisplayTime":600,"playbackBarProgressBorderRadius":0,"subtitlesOpacity":1,"subtitlesPaddingTop":5,"playbackBarProgressBackgroundColor":["#3399FF"],"subtitlesTop":0,"firstTransitionDuration":0,"surfaceReticleSelectionColor":"#FFFFFF","subtitlesShadow":false,"vrPointerColor":"#FFFFFF","subtitlesGap":0,"playbackBarBackgroundOpacity":1,"toolTipFontSize":"1.11vmin","minHeight":50,"subtitlesTextShadowVerticalLength":1,"surfaceReticleSelectionOpacity":1,"minWidth":100,"progressBottom":0,"toolTipFontStyle":"normal","subtitlesFontWeight":"normal","subtitlesHorizontalAlign":"center","subtitlesBackgroundColor":"#000000","toolTipBorderColor":"#767676","subtitlesTextShadowColor":"#000000","borderRadius":0,"toolTipFontWeight":"normal","playbackBarHeadShadowOpacity":0.7,"playbackBarHeadShadowBlurRadius":3,"toolTipOpacity":1,"borderSize":0,"subtitlesVerticalAlign":"bottom","playbackBarLeft":0,"translationTransitionDuration":1000,"progressHeight":10,"progressBackgroundColorRatios":[0],"toolTipBackgroundColor":"#F6F6F6","subtitlesPaddingBottom":5,"displayTooltipInTouchScreens":true,"paddingTop":0,"subtitlesPaddingLeft":5,"toolTipTextShadowBlurRadius":3,"playbackBarHeadShadowVerticalLength":0,"subtitlesBackgroundOpacity":0.2,"progressBorderSize":0,"paddingBottom":0,"progressBarBorderSize":0,"playbackBarHeadShadowColor":"#000000","playbackBarProgressBackgroundColorRatios":[0],"progressBarBorderRadius":0,"playbackBarHeadHeight":15,"subtitlesPaddingRight":5,"subtitlesBottom":50,"toolTipBorderRadius":3,"playbackBarBorderColor":"#FFFFFF","subtitlesFontSize":"3vmin","subtitlesTextShadowOpacity":1,"playbackBarBorderRadius":0,"playbackBarHeadBackgroundColorRatios":[0,1],"subtitlesTextShadowHorizontalLength":1,"displayTooltipInSurfaceSelection":true,"toolTipShadowBlurRadius":3,"toolTipPaddingBottom":4,"doubleClickAction":"toggle_fullscreen","toolTipShadowOpacity":1,"toolTipShadowSpread":0,"playbackBarProgressBorderColor":"#000000","progressRight":0,"progressBarBackgroundColorDirection":"vertical","playbackBarHeadShadowHorizontalLength":0,"playbackBarHeadShadow":true,"subtitlesBorderSize":0,"playbackBarHeadBorderSize":0,"playbackBarHeadOpacity":1,"transitionMode":"blending","progressOpacity":1,"progressBarBorderColor":"#000000","progressBarBackgroundColorRatios":[0],"playbackBarHeadBorderRadius":0,"toolTipShadowHorizontalLength":0,"toolTipPaddingLeft":6,"playbackBarOpacity":1,"subtitlesBorderColor":"#FFFFFF","progressBorderRadius":0,"playbackBarHeadBackgroundColor":["#111111","#666666"],"playbackBarProgressOpacity":1,"shadow":false,"playbackBarHeadBorderColor":"#000000","playbackBarBorderSize":0,"playbackBarBottom":5,"data":{"name":"Main Viewer"}},{"items":[{"player":"this.MainViewerVideoPlayer","class":"VideoPlayListItem","begin":"this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)","media":"this.video_D8D4423A_CCF0_B0C9_41E7_9AAF6478406B","start":"this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.MainViewerVideoPlayer.set('displayPlayOverlay', true); this.MainViewerVideoPlayer.set('clickAction', 'play_pause'); this.changeBackgroundWhilePlay(this.playList_D009F07A_CF71_B149_41D2_7395C16A1303, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_D009F07A_CF71_B149_41D2_7395C16A1303, 0)"}],"class":"PlayList","id":"playList_D009F07A_CF71_B149_41D2_7395C16A1303"},{"class":"Container","borderRadius":0,"gap":10,"borderSize":0,"width":"99.904%","paddingLeft":0,"paddingTop":0,"id":"Container_D9793CF0_CC90_B159_41B6_83392B5DC4C4","horizontalAlign":"center","paddingBottom":0,"paddingRight":0,"children":["this.IconButton_DB38DCE6_CC90_B179_41B1_0CD7787BECFB","this.IconButton_DB6326CB_CC90_9148_41E4_4C1D578ED49B","this.IconButton_DB03A7E7_CC90_BF78_41D8_9CFFF60598EF","this.IconButton_D81BBA28_CC91_90C8_41DA_458D608914B0","this.IconButton_D8133E8D_CC90_71C8_41DC_B2E95B86621E"],"scrollBarMargin":2,"verticalAlign":"middle","backgroundOpacity":0,"contentOpaque":false,"bottom":"0%","toolTipHorizontalAlign":"center","height":"12.272%","layout":"horizontal","overflow":"scroll","scrollBarOpacity":0.5,"scrollBarVisible":"rollOver","scrollBarColor":"#000000","left":"0.09%","propagateClick":false,"minWidth":20,"shadow":false,"minHeight":20,"scrollBarWidth":10,"data":{"name":"Container7535"}},{"class":"PanoramaCameraSequence","id":"sequence_C2CF15EE_C86E_0653_41E1_2940656C448B","movements":[{"yawDelta":32.5,"easing":"cubic_in","class":"DistancePanoramaCameraMovement","yawSpeed":5.31},{"yawDelta":295,"easing":"linear","class":"DistancePanoramaCameraMovement","yawSpeed":5.31},{"yawDelta":32.5,"easing":"cubic_out","class":"DistancePanoramaCameraMovement","yawSpeed":5.31}],"restartMovementOnUserInteraction":false},{"mp3Url":trans('audiores_DC9B6123_C896_3FD1_41E0_B6CA68DB39CB.mp3Url'),"class":"AudioResource","id":"audiores_DC9B6123_C896_3FD1_41E0_B6CA68DB39CB"},{"height":720,"width":1280,"levels":["this.videolevel_D3E13FE9_CF71_8F48_41D5_CD8DB3CF094F"],"class":"VideoResource","id":"videores_D93BB065_CCF7_917B_41D2_F77015C5FE24"},{"class":"HotspotPanoramaOverlay","useHandCursor":true,"maps":[],"areas":["this.HotspotPanoramaOverlayArea_DA6AFFB7_C8AA_0231_41DF_759558F65862"],"items":[{"image":"this.AnimatedImageResource_D00B505C_CF71_B149_41E9_626061DCFB2E","distance":100,"yaw":-17.43,"class":"HotspotPanoramaOverlayImage","data":{"label":"Circle Arrow 07"},"horizontalAlign":"center","vfov":6.3,"hfov":6.3,"verticalAlign":"middle","pitch":-3.02,"scaleMode":"fit_inside"}],"enabledInCardboard":true,"data":{"label":"Circle Arrow 07","hasPanoramaAction":true},"id":"overlay_DA06EEFB_C8AA_0231_41C1_D7AC4C3F5589"},{"image":"this.res_DBBF35F4_C8AA_0637_41B9_ABDF98831FC2","distance":50,"class":"TripodCapPanoramaOverlay","useHandCursor":false,"inertia":false,"angle":0,"rotate":true,"hfov":34.5,"id":"panorama_C4A88A0D_C86E_0DD3_41D9_19767F062A98_tcap0"},{"class":"HotspotPanoramaOverlay","useHandCursor":true,"maps":[],"areas":["this.HotspotPanoramaOverlayArea_DD3076DB_CCF3_9148_41D2_E735E7B3DF0C"],"items":[{"image":"this.res_DF6BE491_CCF0_B1D8_41E6_183AA41D0292","distance":50,"yaw":-17.34,"class":"HotspotPanoramaOverlayImage","horizontalAlign":"center","vfov":4.62,"data":{"label":"Logo sem fundo"},"hfov":8.6,"verticalAlign":"middle","pitch":-2.77,"scaleMode":"fit_inside"}],"enabledInCardboard":true,"data":{"label":"Logo sem fundo"},"id":"overlay_DF16F600_CCF3_90B9_41D5_BF687021524D"},{"class":"PanoramaCameraSequence","id":"sequence_C2F385EC_C86E_0657_41C7_025DB82EBEBD","movements":[{"yawDelta":32.5,"easing":"cubic_in","class":"DistancePanoramaCameraMovement","yawSpeed":5.31},{"yawDelta":295,"easing":"linear","class":"DistancePanoramaCameraMovement","yawSpeed":5.31},{"yawDelta":32.5,"easing":"cubic_out","class":"DistancePanoramaCameraMovement","yawSpeed":5.31}],"restartMovementOnUserInteraction":false},{"image":"this.res_DBBF35F4_C8AA_0637_41B9_ABDF98831FC2","distance":50,"class":"TripodCapPanoramaOverlay","useHandCursor":false,"inertia":false,"angle":0,"rotate":true,"hfov":34.5,"id":"panorama_C2E7589D_C86E_0EF1_41DD_6F195C9F72A5_tcap0"},{"class":"HotspotPanoramaOverlay","useHandCursor":true,"maps":[],"areas":["this.HotspotPanoramaOverlayArea_DBCA24CA_C8AE_0650_41E8_F6412DEFF561"],"items":[{"image":"this.AnimatedImageResource_D009C05C_CF71_B149_41E9_5854CB74B03D","distance":100,"yaw":-64.33,"class":"HotspotPanoramaOverlayImage","rotationY":34.81,"data":{"label":"Info Red 01"},"horizontalAlign":"center","vfov":5.14,"hfov":7.05,"verticalAlign":"middle","pitch":-7.44,"scaleMode":"fit_inside"}],"enabledInCardboard":true,"data":{"label":"Info Red 01"},"id":"overlay_DBDAE4BB_C8AE_0631_41D4_A0344BA3C6C0"},{"class":"HotspotPanoramaOverlay","useHandCursor":true,"maps":[],"areas":["this.HotspotPanoramaOverlayArea_DBFC4CA1_C8AA_06D1_41E8_BE43BF3A53A7"],"items":[{"image":"this.AnimatedImageResource_D009805C_CF71_B149_41E1_FAFF38F8B143","distance":100,"yaw":-105.78,"class":"HotspotPanoramaOverlayImage","rotationY":-8.76,"data":{"label":"Info Red 01"},"horizontalAlign":"center","vfov":5,"hfov":6.02,"verticalAlign":"middle","pitch":1.37,"scaleMode":"fit_inside"}],"enabledInCardboard":true,"data":{"label":"Info Red 01"},"id":"overlay_DBC2EC98_C8AA_06FF_41DA_457BDA643FB1"},{"data":{"label":"Poligono"},"class":"HotspotPanoramaOverlay","useHandCursor":true,"maps":[],"areas":["this.HotspotPanoramaOverlayArea_DE027F36_CCF1_B0D8_41E5_A93616B829FA"],"items":[{"image":{"class":"ImageResource","levels":[{"height":247,"width":364,"url":"media/panorama_C2E7589D_C86E_0EF1_41DD_6F195C9F72A5_HS_t719cpg8.png","class":"ImageResourceLevel"}]},"distance":50,"yaw":108.15,"pitch":9.48,"class":"HotspotPanoramaOverlayImage","data":{"label":"Poligono"},"vfov":14.55,"hfov":21.32}],"rollOverDisplay":true,"id":"overlay_DE96EEE8_CCF1_B148_41E3_BD6BAAB3D2E3"},{"class":"HotspotPanoramaOverlay","useHandCursor":true,"maps":[],"areas":["this.HotspotPanoramaOverlayArea_D66ADE3A_CC90_B0C8_41E6_BE93E353C6D7"],"items":["this.HotspotPanoramaOverlayTextImage_D69B3C27_CC90_B0F8_41D3_7037CC5C1E3E"],"enabledInCardboard":true,"data":{"label":"Texto"},"id":"overlay_D6985C65_CC90_B17B_41B1_8DA5D95E0FE0"},{"width":1280,"url":trans('videolevel_D3E13FE9_CF71_8F48_41D5_CD8DB3CF094F.url'),"class":"VideoResourceLevel","posterURL":trans('videolevel_D3E13FE9_CF71_8F48_41D5_CD8DB3CF094F.posterURL'),"height":720,"type":"video/mp4","bitrate":1658,"framerate":24,"id":"videolevel_D3E13FE9_CF71_8F48_41D5_CD8DB3CF094F"},{"id":"HotspotPanoramaOverlayArea_DA6AFFB7_C8AA_0231_41DF_759558F65862","click":"this.mainPlayList.set('selectedIndex', 1)","class":"HotspotPanoramaOverlayArea","mapColor":"any"},{"frameDuration":41,"rowCount":6,"class":"AnimatedImageResource","levels":[{"height":900,"width":600,"url":"media/res_DB846D13_C8AA_07F1_41E5_BA44745FB48D_0.png","class":"ImageResourceLevel"}],"colCount":4,"frameCount":24,"id":"AnimatedImageResource_D00B505C_CF71_B149_41E9_626061DCFB2E"},{"id":"res_DBBF35F4_C8AA_0637_41B9_ABDF98831FC2","class":"ImageResource","levels":[{"height":1024,"width":1024,"url":"media/res_DBBF35F4_C8AA_0637_41B9_ABDF98831FC2_0.png","class":"ImageResourceLevel"}]},{"id":"HotspotPanoramaOverlayArea_DD3076DB_CCF3_9148_41D2_E735E7B3DF0C","class":"HotspotPanoramaOverlayArea","mapColor":"any"},{"id":"res_DF6BE491_CCF0_B1D8_41E6_183AA41D0292","class":"ImageResource","levels":[{"height":110,"width":205,"url":"media/res_DF6BE491_CCF0_B1D8_41E6_183AA41D0292_0.png","class":"ImageResourceLevel"}]},{"id":"HotspotPanoramaOverlayArea_DBCA24CA_C8AE_0650_41E8_F6412DEFF561","click":"this.openLink(this.translate('LinkBehaviour_DDF1C1BF_C8F6_7E31_41E7_C1BBF37707FF.source'), '_blank')","class":"HotspotPanoramaOverlayArea","mapColor":"any"},{"frameDuration":41,"rowCount":6,"class":"AnimatedImageResource","levels":[{"height":732,"width":488,"url":"media/res_DBFECE79_C896_0231_41D1_AA60400D3836_0.png","class":"ImageResourceLevel"}],"colCount":4,"frameCount":24,"id":"AnimatedImageResource_D009C05C_CF71_B149_41E9_5854CB74B03D"},{"id":"HotspotPanoramaOverlayArea_DBFC4CA1_C8AA_06D1_41E8_BE43BF3A53A7","click":"this.openLink(this.translate('LinkBehaviour_DD88F336_C8FA_0233_41DB_C755BB28CC53.source'), '_blank')","class":"HotspotPanoramaOverlayArea","mapColor":"any"},{"frameDuration":41,"rowCount":6,"class":"AnimatedImageResource","levels":[{"height":732,"width":488,"url":"media/res_DBFECE79_C896_0231_41D1_AA60400D3836_0.png","class":"ImageResourceLevel"}],"colCount":4,"frameCount":24,"id":"AnimatedImageResource_D009805C_CF71_B149_41E1_FAFF38F8B143"},{"id":"HotspotPanoramaOverlayArea_DE027F36_CCF1_B0D8_41E5_A93616B829FA","click":"if(this.MainViewerVideoPlayer.get('state') == 'playing' && this.playList_D009F07A_CF71_B149_41D2_7395C16A1303.get('selectedIndex') == 0) { this.MainViewerVideoPlayer.pause(); } else { this.setMediaBehaviour(this.playList_D009F07A_CF71_B149_41D2_7395C16A1303, 0, this.panorama_C2E7589D_C86E_0EF1_41DD_6F195C9F72A5, true);this.MainViewerVideoPlayer.play(); }","class":"HotspotPanoramaOverlayArea","mapColor":"image"},{"id":"HotspotPanoramaOverlayArea_D66ADE3A_CC90_B0C8_41E6_BE93E353C6D7","class":"HotspotPanoramaOverlayArea","mapColor":"any"},{"verticalAlign":"middle","class":"HotspotPanoramaOverlayImage","roll":-0.48,"pitch":10.36,"id":"HotspotPanoramaOverlayTextImage_D69B3C27_CC90_B0F8_41D3_7037CC5C1E3E","image":{"class":"ImageResource","levels":["this.imlevel_D2439A3D_CF70_90C8_41A0_C88B9E8FF491"]},"distance":50,"yaw":108.04,"rotationY":0.11,"horizontalAlign":"center","data":{"label":"Texto"},"hfov":18.63,"vfov":11},{"height":739.5,"width":1259.47,"url":trans('imlevel_D2439A3D_CF70_90C8_41A0_C88B9E8FF491.url'),"class":"ImageResourceLevel","id":"imlevel_D2439A3D_CF70_90C8_41A0_C88B9E8FF491"}],"mediaActivationMode":"window","children":["this.MainViewer","this.Container_D9793CF0_CC90_B159_41B6_83392B5DC4C4"],"scrollBarVisible":"rollOver","scrollBarColor":"#000000","minHeight":0,"propagateClick":false,"downloadEnabled":true,"minWidth":0,"shadow":false,"mobileMipmappingEnabled":false,"scrollBarWidth":10,"backgroundColorDirection":"vertical","data":{"defaultLocale":"pt","name":"Player812","locales":{"pt":"locale/pt.txt"},"textToSpeechConfig":{"speechOnInfoWindow":false,"volume":1,"pitch":1,"rate":1,"speechOnQuizQuestion":false,"stopBackgroundAudio":false,"speechOnTooltip":false}}};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs;
script['data']['history'] = {};
script['scripts']['createQuizConfig'] = createQuizConfig;
TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device_v2022.1.14.js.map
})();
//Generated with v2022.1.14, Wed Oct 12 2022