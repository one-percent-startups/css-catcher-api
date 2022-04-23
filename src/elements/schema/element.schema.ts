import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

class StyleProp {
  @Prop()
  'accentColor': String;
  @Prop()
  'additiveSymbols': String;
  @Prop()
  'alignContent': String;
  @Prop()
  'alignItems': String;
  @Prop()
  'alignSelf': String;
  @Prop()
  'alignmentBaseline': String;
  @Prop()
  'all': String;
  @Prop()
  'animation': String;
  @Prop()
  'animationDelay': String;
  @Prop()
  'animationDirection': String;
  @Prop()
  'animationDuration': String;
  @Prop()
  'animationFillMode': String;
  @Prop()
  'animationIterationCount': String;
  @Prop()
  'animationName': String;
  @Prop()
  'animationPlayState': String;
  @Prop()
  'animationTimingFunction': String;
  @Prop()
  'appRegion': String;
  @Prop()
  'appearance': String;
  @Prop()
  'ascentOverride': String;
  @Prop()
  'aspectRatio': String;
  @Prop()
  'backdropFilter': String;
  @Prop()
  'backfaceVisibility': String;
  @Prop()
  'background': String;
  @Prop()
  'backgroundAttachment': String;
  @Prop()
  'backgroundBlendMode': String;
  @Prop()
  'backgroundClip': String;
  @Prop()
  'backgroundColor': String;
  @Prop()
  'backgroundImage': String;
  @Prop()
  'backgroundOrigin': String;
  @Prop()
  'backgroundPosition': String;
  @Prop()
  'backgroundPositionX': String;
  @Prop()
  'backgroundPositionY': String;
  @Prop()
  'backgroundRepeat': String;
  @Prop()
  'backgroundRepeatX': String;
  @Prop()
  'backgroundRepeatY': String;
  @Prop()
  'backgroundSize': String;
  @Prop()
  'baselineShift': String;
  @Prop()
  'blockSize': String;
  @Prop()
  'border': String;
  @Prop()
  'borderBlock': String;
  @Prop()
  'borderBlockColor': String;
  @Prop()
  'borderBlockEnd': String;
  @Prop()
  'borderBlockEndColor': String;
  @Prop()
  'borderBlockEndStyle': String;
  @Prop()
  'borderBlockEndWidth': String;
  @Prop()
  'borderBlockStart': String;
  @Prop()
  'borderBlockStartColor': String;
  @Prop()
  'borderBlockStartStyle': String;
  @Prop()
  'borderBlockStartWidth': String;
  @Prop()
  'borderBlockStyle': String;
  @Prop()
  'borderBlockWidth': String;
  @Prop()
  'borderBottom': String;
  @Prop()
  'borderBottomColor': String;
  @Prop()
  'borderBottomLeftRadius': String;
  @Prop()
  'borderBottomRightRadius': String;
  @Prop()
  'borderBottomStyle': String;
  @Prop()
  'borderBottomWidth': String;
  @Prop()
  'borderCollapse': String;
  @Prop()
  'borderColor': String;
  @Prop()
  'borderEndEndRadius': String;
  @Prop()
  'borderEndStartRadius': String;
  @Prop()
  'borderImage': String;
  @Prop()
  'borderImageOutset': String;
  @Prop()
  'borderImageRepeat': String;
  @Prop()
  'borderImageSlice': String;
  @Prop()
  'borderImageSource': String;
  @Prop()
  'borderImageWidth': String;
  @Prop()
  'borderInline': String;
  @Prop()
  'borderInlineColor': String;
  @Prop()
  'borderInlineEnd': String;
  @Prop()
  'borderInlineEndColor': String;
  @Prop()
  'borderInlineEndStyle': String;
  @Prop()
  'borderInlineEndWidth': String;
  @Prop()
  'borderInlineStart': String;
  @Prop()
  'borderInlineStartColor': String;
  @Prop()
  'borderInlineStartStyle': String;
  @Prop()
  'borderInlineStartWidth': String;
  @Prop()
  'borderInlineStyle': String;
  @Prop()
  'borderInlineWidth': String;
  @Prop()
  'borderLeft': String;
  @Prop()
  'borderLeftColor': String;
  @Prop()
  'borderLeftStyle': String;
  @Prop()
  'borderLeftWidth': String;
  @Prop()
  'borderRadius': String;
  @Prop()
  'borderRight': String;
  @Prop()
  'borderRightColor': String;
  @Prop()
  'borderRightStyle': String;
  @Prop()
  'borderRightWidth': String;
  @Prop()
  'borderSpacing': String;
  @Prop()
  'borderStartEndRadius': String;
  @Prop()
  'borderStartStartRadius': String;
  @Prop()
  'borderStyle': String;
  @Prop()
  'borderTop': String;
  @Prop()
  'borderTopColor': String;
  @Prop()
  'borderTopLeftRadius': String;
  @Prop()
  'borderTopRightRadius': String;
  @Prop()
  'borderTopStyle': String;
  @Prop()
  'borderTopWidth': String;
  @Prop()
  'borderWidth': String;
  @Prop()
  'bottom': String;
  @Prop()
  'boxShadow': String;
  @Prop()
  'boxSizing': String;
  @Prop()
  'breakAfter': String;
  @Prop()
  'breakBefore': String;
  @Prop()
  'breakInside': String;
  @Prop()
  'bufferedRendering': String;
  @Prop()
  'captionSide': String;
  @Prop()
  'caretColor': String;
  @Prop()
  'clear': String;
  @Prop()
  'clip': String;
  @Prop()
  'clipPath': String;
  @Prop()
  'clipRule': String;
  @Prop()
  'color': String;
  @Prop()
  'colorInterpolation': String;
  @Prop()
  'colorInterpolationFilters': String;
  @Prop()
  'colorRendering': String;
  @Prop()
  'colorScheme': String;
  @Prop()
  'columnCount': String;
  @Prop()
  'columnFill': String;
  @Prop()
  'columnGap': String;
  @Prop()
  'columnRule': String;
  @Prop()
  'columnRuleColor': String;
  @Prop()
  'columnRuleStyle': String;
  @Prop()
  'columnRuleWidth': String;
  @Prop()
  'columnSpan': String;
  @Prop()
  'columnWidth': String;
  @Prop()
  'columns': String;
  @Prop()
  'contain': String;
  @Prop()
  'containIntrinsicBlockSize': String;
  @Prop()
  'containIntrinsicHeight': String;
  @Prop()
  'containIntrinsicInlineSize': String;
  @Prop()
  'containIntrinsicSize': String;
  @Prop()
  'containIntrinsicWidth': String;
  @Prop()
  'content': String;
  @Prop()
  'contentVisibility': String;
  @Prop()
  'counterIncrement': String;
  @Prop()
  'counterReset': String;
  @Prop()
  'counterSet': String;
  @Prop()
  'cursor': String;
  @Prop()
  'cx': String;
  @Prop()
  'cy': String;
  @Prop()
  'd': String;
  @Prop()
  'descentOverride': String;
  @Prop()
  'direction': String;
  @Prop()
  'display': String;
  @Prop()
  'dominantBaseline': String;
  @Prop()
  'emptyCells': String;
  @Prop()
  'fallback': String;
  @Prop()
  'fill': String;
  @Prop()
  'fillOpacity': String;
  @Prop()
  'fillRule': String;
  @Prop()
  'filter': String;
  @Prop()
  'flex': String;
  @Prop()
  'flexBasis': String;
  @Prop()
  'flexDirection': String;
  @Prop()
  'flexFlow': String;
  @Prop()
  'flexGrow': String;
  @Prop()
  'flexShrink': String;
  @Prop()
  'flexWrap': String;
  @Prop()
  'float': String;
  @Prop()
  'floodColor': String;
  @Prop()
  'floodOpacity': String;
  @Prop()
  'font': String;
  @Prop()
  'fontDisplay': String;
  @Prop()
  'fontFamily': String;
  @Prop()
  'fontFeatureSettings': String;
  @Prop()
  'fontKerning': String;
  @Prop()
  'fontOpticalSizing': String;
  @Prop()
  'fontSize': String;
  @Prop()
  'fontStretch': String;
  @Prop()
  'fontStyle': String;
  @Prop()
  'fontSynthesis': String;
  @Prop()
  'fontSynthesisSmallCaps': String;
  @Prop()
  'fontSynthesisStyle': String;
  @Prop()
  'fontSynthesisWeight': String;
  @Prop()
  'fontVariant': String;
  @Prop()
  'fontVariantCaps': String;
  @Prop()
  'fontVariantEastAsian': String;
  @Prop()
  'fontVariantLigatures': String;
  @Prop()
  'fontVariantNumeric': String;
  @Prop()
  'fontVariationSettings': String;
  @Prop()
  'fontWeight': String;
  @Prop()
  'forcedColorAdjust': String;
  @Prop()
  'gap': String;
  @Prop()
  'grid': String;
  @Prop()
  'gridArea': String;
  @Prop()
  'gridAutoColumns': String;
  @Prop()
  'gridAutoFlow': String;
  @Prop()
  'gridAutoRows': String;
  @Prop()
  'gridColumn': String;
  @Prop()
  'gridColumnEnd': String;
  @Prop()
  'gridColumnGap': String;
  @Prop()
  'gridColumnStart': String;
  @Prop()
  'gridGap': String;
  @Prop()
  'gridRow': String;
  @Prop()
  'gridRowEnd': String;
  @Prop()
  'gridRowGap': String;
  @Prop()
  'gridRowStart': String;
  @Prop()
  'gridTemplate': String;
  @Prop()
  'gridTemplateAreas': String;
  @Prop()
  'gridTemplateColumns': String;
  @Prop()
  'gridTemplateRows': String;
  @Prop()
  'height': String;
  @Prop()
  'hyphens': String;
  @Prop()
  'imageOrientation': String;
  @Prop()
  'imageRendering': String;
  @Prop()
  'inherits': String;
  @Prop()
  'initialValue': String;
  @Prop()
  'inlineSize': String;
  @Prop()
  'inset': String;
  @Prop()
  'insetBlock': String;
  @Prop()
  'insetBlockEnd': String;
  @Prop()
  'insetBlockStart': String;
  @Prop()
  'insetInline': String;
  @Prop()
  'insetInlineEnd': String;
  @Prop()
  'insetInlineStart': String;
  @Prop()
  'isolation': String;
  @Prop()
  'justifyContent': String;
  @Prop()
  'justifyItems': String;
  @Prop()
  'justifySelf': String;
  @Prop()
  'left': String;
  @Prop()
  'letterSpacing': String;
  @Prop()
  'lightingColor': String;
  @Prop()
  'lineBreak': String;
  @Prop()
  'lineGapOverride': String;
  @Prop()
  'lineHeight': String;
  @Prop()
  'listStyle': String;
  @Prop()
  'listStyleImage': String;
  @Prop()
  'listStylePosition': String;
  @Prop()
  'listStyleType': String;
  @Prop()
  'margin': String;
  @Prop()
  'marginBlock': String;
  @Prop()
  'marginBlockEnd': String;
  @Prop()
  'marginBlockStart': String;
  @Prop()
  'marginBottom': String;
  @Prop()
  'marginInline': String;
  @Prop()
  'marginInlineEnd': String;
  @Prop()
  'marginInlineStart': String;
  @Prop()
  'marginLeft': String;
  @Prop()
  'marginRight': String;
  @Prop()
  'marginTop': String;
  @Prop()
  'marker': String;
  @Prop()
  'markerEnd': String;
  @Prop()
  'markerMid': String;
  @Prop()
  'markerStart': String;
  @Prop()
  'mask': String;
  @Prop()
  'maskType': String;
  @Prop()
  'maxBlockSize': String;
  @Prop()
  'maxHeight': String;
  @Prop()
  'maxInlineSize': String;
  @Prop()
  'maxWidth': String;
  @Prop()
  'maxZoom': String;
  @Prop()
  'minBlockSize': String;
  @Prop()
  'minHeight': String;
  @Prop()
  'minInlineSize': String;
  @Prop()
  'minWidth': String;
  @Prop()
  'minZoom': String;
  @Prop()
  'mixBlendMode': String;
  @Prop()
  'negative': String;
  @Prop()
  'objectFit': String;
  @Prop()
  'objectPosition': String;
  @Prop()
  'offset': String;
  @Prop()
  'offsetDistance': String;
  @Prop()
  'offsetPath': String;
  @Prop()
  'offsetRotate': String;
  @Prop()
  'opacity': String;
  @Prop()
  'order': String;
  @Prop()
  'orientation': String;
  @Prop()
  'orphans': String;
  @Prop()
  'outline': String;
  @Prop()
  'outlineColor': String;
  @Prop()
  'outlineOffset': String;
  @Prop()
  'outlineStyle': String;
  @Prop()
  'outlineWidth': String;
  @Prop()
  'overflow': String;
  @Prop()
  'overflowAnchor': String;
  @Prop()
  'overflowClipMargin': String;
  @Prop()
  'overflowWrap': String;
  @Prop()
  'overflowX': String;
  @Prop()
  'overflowY': String;
  @Prop()
  'overscrollBehavior': String;
  @Prop()
  'overscrollBehaviorBlock': String;
  @Prop()
  'overscrollBehaviorInline': String;
  @Prop()
  'overscrollBehaviorX': String;
  @Prop()
  'overscrollBehaviorY': String;
  @Prop()
  'pad': String;
  @Prop()
  'padding': String;
  @Prop()
  'paddingBlock': String;
  @Prop()
  'paddingBlockEnd': String;
  @Prop()
  'paddingBlockStart': String;
  @Prop()
  'paddingBottom': String;
  @Prop()
  'paddingInline': String;
  @Prop()
  'paddingInlineEnd': String;
  @Prop()
  'paddingInlineStart': String;
  @Prop()
  'paddingLeft': String;
  @Prop()
  'paddingRight': String;
  @Prop()
  'paddingTop': String;
  @Prop()
  'page': String;
  @Prop()
  'pageBreakAfter': String;
  @Prop()
  'pageBreakBefore': String;
  @Prop()
  'pageBreakInside': String;
  @Prop()
  'pageOrientation': String;
  @Prop()
  'paintOrder': String;
  @Prop()
  'perspective': String;
  @Prop()
  'perspectiveOrigin': String;
  @Prop()
  'placeContent': String;
  @Prop()
  'placeItems': String;
  @Prop()
  'placeSelf': String;
  @Prop()
  'pointerEvents': String;
  @Prop()
  'position': String;
  @Prop()
  'prefix': String;
  @Prop()
  'quotes': String;
  @Prop()
  'r': String;
  @Prop()
  'range': String;
  @Prop()
  'resize': String;
  @Prop()
  'right': String;
  @Prop()
  'rowGap': String;
  @Prop()
  'rubyPosition': String;
  @Prop()
  'rx': String;
  @Prop()
  'ry': String;
  @Prop()
  'scrollBehavior': String;
  @Prop()
  'scrollMargin': String;
  @Prop()
  'scrollMarginBlock': String;
  @Prop()
  'scrollMarginBlockEnd': String;
  @Prop()
  'scrollMarginBlockStart': String;
  @Prop()
  'scrollMarginBottom': String;
  @Prop()
  'scrollMarginInline': String;
  @Prop()
  'scrollMarginInlineEnd': String;
  @Prop()
  'scrollMarginInlineStart': String;
  @Prop()
  'scrollMarginLeft': String;
  @Prop()
  'scrollMarginRight': String;
  @Prop()
  'scrollMarginTop': String;
  @Prop()
  'scrollPadding': String;
  @Prop()
  'scrollPaddingBlock': String;
  @Prop()
  'scrollPaddingBlockEnd': String;
  @Prop()
  'scrollPaddingBlockStart': String;
  @Prop()
  'scrollPaddingBottom': String;
  @Prop()
  'scrollPaddingInline': String;
  @Prop()
  'scrollPaddingInlineEnd': String;
  @Prop()
  'scrollPaddingInlineStart': String;
  @Prop()
  'scrollPaddingLeft': String;
  @Prop()
  'scrollPaddingRight': String;
  @Prop()
  'scrollPaddingTop': String;
  @Prop()
  'scrollSnapAlign': String;
  @Prop()
  'scrollSnapStop': String;
  @Prop()
  'scrollSnapType': String;
  @Prop()
  'scrollbarGutter': String;
  @Prop()
  'shapeImageThreshold': String;
  @Prop()
  'shapeMargin': String;
  @Prop()
  'shapeOutside': String;
  @Prop()
  'shapeRendering': String;
  @Prop()
  'size': String;
  @Prop()
  'sizeAdjust': String;
  @Prop()
  'speak': String;
  @Prop()
  'speakAs': String;
  @Prop()
  'src': String;
  @Prop()
  'stopColor': String;
  @Prop()
  'stopOpacity': String;
  @Prop()
  'stroke': String;
  @Prop()
  'strokeDasharray': String;
  @Prop()
  'strokeDashoffset': String;
  @Prop()
  'strokeLinecap': String;
  @Prop()
  'strokeLinejoin': String;
  @Prop()
  'strokeMiterlimit': String;
  @Prop()
  'strokeOpacity': String;
  @Prop()
  'strokeWidth': String;
  @Prop()
  'suffix': String;
  @Prop()
  'symbols': String;
  @Prop()
  'syntax': String;
  @Prop()
  'system': String;
  @Prop()
  'tabSize': String;
  @Prop()
  'tableLayout': String;
  @Prop()
  'textAlign': String;
  @Prop()
  'textAlignLast': String;
  @Prop()
  'textAnchor': String;
  @Prop()
  'textCombineUpright': String;
  @Prop()
  'textDecoration': String;
  @Prop()
  'textDecorationColor': String;
  @Prop()
  'textDecorationLine': String;
  @Prop()
  'textDecorationSkipInk': String;
  @Prop()
  'textDecorationStyle': String;
  @Prop()
  'textDecorationThickness': String;
  @Prop()
  'textEmphasis': String;
  @Prop()
  'textEmphasisColor': String;
  @Prop()
  'textEmphasisPosition': String;
  @Prop()
  'textEmphasisStyle': String;
  @Prop()
  'textIndent': String;
  @Prop()
  'textOrientation': String;
  @Prop()
  'textOverflow': String;
  @Prop()
  'textRendering': String;
  @Prop()
  'textShadow': String;
  @Prop()
  'textSizeAdjust': String;
  @Prop()
  'textTransform': String;
  @Prop()
  'textUnderlineOffset': String;
  @Prop()
  'textUnderlinePosition': String;
  @Prop()
  top: String;
  @Prop()
  'touchAction': String;
  @Prop()
  'transform': String;
  @Prop()
  'transformBox': String;
  @Prop()
  'transformOrigin': String;
  @Prop()
  'transformStyle': String;
  @Prop()
  'transition': String;
  @Prop()
  'transitionDelay': String;
  @Prop()
  'transitionDuration': String;
  @Prop()
  'transitionProperty': String;
  @Prop()
  'transitionTimingFunction': String;
  @Prop()
  'unicodeBidi': String;
  @Prop()
  'unicodeRange': String;
  @Prop()
  'userSelect': String;
  @Prop()
  'userZoom': String;
  @Prop()
  'vectorEffect': String;
  @Prop()
  'verticalAlign': String;
  @Prop()
  'visibility': String;
  @Prop()
  'webkitAlignContent': String;
  @Prop()
  'webkitAlignItems': String;
  @Prop()
  'webkitAlignSelf': String;
  @Prop()
  'webkitAnimation': String;
  @Prop()
  'webkitAnimationDelay': String;
  @Prop()
  'webkitAnimationDirection': String;
  @Prop()
  'webkitAnimationDuration': String;
  @Prop()
  'webkitAnimationFillMode': String;
  @Prop()
  'webkitAnimationIterationCount': String;
  @Prop()
  'webkitAnimationName': String;
  @Prop()
  'webkitAnimationPlayState': String;
  @Prop()
  'webkitAnimationTimingFunction': String;
  @Prop()
  'webkitAppRegion': String;
  @Prop()
  'webkitAppearance': String;
  @Prop()
  'webkitBackfaceVisibility': String;
  @Prop()
  'webkitBackgroundClip': String;
  @Prop()
  'webkitBackgroundOrigin': String;
  @Prop()
  'webkitBackgroundSize': String;
  @Prop()
  'webkitBorderAfter': String;
  @Prop()
  'webkitBorderAfterColor': String;
  @Prop()
  'webkitBorderAfterStyle': String;
  @Prop()
  'webkitBorderAfterWidth': String;
  @Prop()
  'webkitBorderBefore': String;
  @Prop()
  'webkitBorderBeforeColor': String;
  @Prop()
  'webkitBorderBeforeStyle': String;
  @Prop()
  'webkitBorderBeforeWidth': String;
  @Prop()
  'webkitBorderBottomLeftRadius': String;
  @Prop()
  'webkitBorderBottomRightRadius': String;
  @Prop()
  'webkitBorderEnd': String;
  @Prop()
  'webkitBorderEndColor': String;
  @Prop()
  'webkitBorderEndStyle': String;
  @Prop()
  'webkitBorderEndWidth': String;
  @Prop()
  'webkitBorderHorizontalSpacing': String;
  @Prop()
  'webkitBorderImage': String;
  @Prop()
  'webkitBorderRadius': String;
  @Prop()
  'webkitBorderStart': String;
  @Prop()
  'webkitBorderStartColor': String;
  @Prop()
  'webkitBorderStartStyle': String;
  @Prop()
  'webkitBorderStartWidth': String;
  @Prop()
  'webkitBorderTopLeftRadius': String;
  @Prop()
  'webkitBorderTopRightRadius': String;
  @Prop()
  'webkitBorderVerticalSpacing': String;
  @Prop()
  'webkitBoxAlign': String;
  @Prop()
  'webkitBoxDecorationBreak': String;
  @Prop()
  'webkitBoxDirection': String;
  @Prop()
  'webkitBoxFlex': String;
  @Prop()
  'webkitBoxOrdinalGroup': String;
  @Prop()
  'webkitBoxOrient': String;
  @Prop()
  'webkitBoxPack': String;
  @Prop()
  'webkitBoxReflect': String;
  @Prop()
  'webkitBoxShadow': String;
  @Prop()
  'webkitBoxSizing': String;
  @Prop()
  'webkitClipPath': String;
  @Prop()
  'webkitColumnBreakAfter': String;
  @Prop()
  'webkitColumnBreakBefore': String;
  @Prop()
  'webkitColumnBreakInside': String;
  @Prop()
  'webkitColumnCount': String;
  @Prop()
  'webkitColumnGap': String;
  @Prop()
  'webkitColumnRule': String;
  @Prop()
  'webkitColumnRuleColor': String;
  @Prop()
  'webkitColumnRuleStyle': String;
  @Prop()
  'webkitColumnRuleWidth': String;
  @Prop()
  'webkitColumnSpan': String;
  @Prop()
  'webkitColumnWidth': String;
  @Prop()
  'webkitColumns': String;
  @Prop()
  'webkitFilter': String;
  @Prop()
  'webkitFlex': String;
  @Prop()
  'webkitFlexBasis': String;
  @Prop()
  'webkitFlexDirection': String;
  @Prop()
  'webkitFlexFlow': String;
  @Prop()
  'webkitFlexGrow': String;
  @Prop()
  'webkitFlexShrink': String;
  @Prop()
  'webkitFlexWrap': String;
  @Prop()
  'webkitFontFeatureSettings': String;
  @Prop()
  'webkitFontSmoothing': String;
  @Prop()
  'webkitHighlight': String;
  @Prop()
  'webkitHyphenateCharacter': String;
  @Prop()
  'webkitJustifyContent': String;
  @Prop()
  'webkitLineBreak': String;
  @Prop()
  'webkitLineClamp': String;
  @Prop()
  'webkitLocale': String;
  @Prop()
  'webkitLogicalHeight': String;
  @Prop()
  'webkitLogicalWidth': String;
  @Prop()
  'webkitMarginAfter': String;
  @Prop()
  'webkitMarginBefore': String;
  @Prop()
  'webkitMarginEnd': String;
  @Prop()
  'webkitMarginStart': String;
  @Prop()
  'webkitMask': String;
  @Prop()
  'webkitMaskBoxImage': String;
  @Prop()
  'webkitMaskBoxImageOutset': String;
  @Prop()
  'webkitMaskBoxImageRepeat': String;
  @Prop()
  'webkitMaskBoxImageSlice': String;
  @Prop()
  'webkitMaskBoxImageSource': String;
  @Prop()
  'webkitMaskBoxImageWidth': String;
  @Prop()
  'webkitMaskClip': String;
  @Prop()
  'webkitMaskComposite': String;
  @Prop()
  'webkitMaskImage': String;
  @Prop()
  'webkitMaskOrigin': String;
  @Prop()
  'webkitMaskPosition': String;
  @Prop()
  'webkitMaskPositionX': String;
  @Prop()
  'webkitMaskPositionY': String;
  @Prop()
  'webkitMaskRepeat': String;
  @Prop()
  'webkitMaskRepeatX': String;
  @Prop()
  'webkitMaskRepeatY': String;
  @Prop()
  'webkitMaskSize': String;
  @Prop()
  'webkitMaxLogicalHeight': String;
  @Prop()
  'webkitMaxLogicalWidth': String;
  @Prop()
  'webkitMinLogicalHeight': String;
  @Prop()
  'webkitMinLogicalWidth': String;
  @Prop()
  'webkitOpacity': String;
  @Prop()
  'webkitOrder': String;
  @Prop()
  'webkitPaddingAfter': String;
  @Prop()
  'webkitPaddingBefore': String;
  @Prop()
  'webkitPaddingEnd': String;
  @Prop()
  'webkitPaddingStart': String;
  @Prop()
  'webkitPerspective': String;
  @Prop()
  'webkitPerspectiveOrigin': String;
  @Prop()
  'webkitPerspectiveOriginX': String;
  @Prop()
  'webkitPerspectiveOriginY': String;
  @Prop()
  'webkitPrintColorAdjust': String;
  @Prop()
  'webkitRtlOrdering': String;
  @Prop()
  'webkitRubyPosition': String;
  @Prop()
  'webkitShapeImageThreshold': String;
  @Prop()
  'webkitShapeMargin': String;
  @Prop()
  'webkitShapeOutside': String;
  @Prop()
  'webkitTapHighlightColor': String;
  @Prop()
  'webkitTextCombine': String;
  @Prop()
  'webkitTextDecorationsInEffect': String;
  @Prop()
  'webkitTextEmphasis': String;
  @Prop()
  'webkitTextEmphasisColor': String;
  @Prop()
  'webkitTextEmphasisPosition': String;
  @Prop()
  'webkitTextEmphasisStyle': String;
  @Prop()
  'webkitTextFillColor': String;
  @Prop()
  'webkitTextOrientation': String;
  @Prop()
  'webkitTextSecurity': String;
  @Prop()
  'webkitTextSizeAdjust': String;
  @Prop()
  'webkitTextStroke': String;
  @Prop()
  'webkitTextStrokeColor': String;
  @Prop()
  'webkitTextStrokeWidth': String;
  @Prop()
  'webkitTransform': String;
  @Prop()
  'webkitTransformOrigin': String;
  @Prop()
  'webkitTransformOriginX': String;
  @Prop()
  'webkitTransformOriginY': String;
  @Prop()
  'webkitTransformOriginZ': String;
  @Prop()
  'webkitTransformStyle': String;
  @Prop()
  'webkitTransition': String;
  @Prop()
  'webkitTransitionDelay': String;
  @Prop()
  'webkitTransitionDuration': String;
  @Prop()
  'webkitTransitionProperty': String;
  @Prop()
  'webkitTransitionTimingFunction': String;
  @Prop()
  'webkitUserDrag': String;
  @Prop()
  'webkitUserModify': String;
  @Prop()
  'webkitUserSelect': String;
  @Prop()
  'webkitWritingMode': String;
  @Prop()
  'whiteSpace': String;
  @Prop()
  'widows': String;
  @Prop()
  'width': String;
  @Prop()
  'willChange': String;
  @Prop()
  'wordBreak': String;
  @Prop()
  'wordSpacing': String;
  @Prop()
  'wordWrap': String;
  @Prop()
  'writingMode': String;
  @Prop()
  'x': String;
  @Prop()
  'y': String;
  @Prop()
  'zIndex': String;
  @Prop()
  'zoom': String;
}

@Schema({ collection: 'element' })
export class Element {
  @Prop({ required: true, type: [Object] })
  childNodes: Array<Element>;

  @Prop()
  innerText: String;

  @Prop({ required: true })
  nodeName: String;

  @Prop({ type: StyleProp })
  style: StyleProp;

  @Prop()
  textContent: String;

  @Prop()
  title: String;
}

export type ElementDocument = Element & Document;
export const ElementSchema = SchemaFactory.createForClass(Element);
