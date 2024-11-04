// "use client"

// import styled, { CSSProperties, css } from "styled-components"

// type AttrPosition = "position" | "top" | "bottom" | "right" | "left" | "zIndex"
// type AttrFlex =
//   | "display"
//   | "flexDirection"
//   | "flexFlow"
//   | "justifyContent"
//   | "alignItems"
//   | "gap"
// type AttrSize =
//   | "width"
//   | "minWidth"
//   | "maxWidth"
//   | "height"
//   | "minHeight"
//   | "maxHeight"
// type AttrPadding =
//   | "padding"
//   | "paddingLeft"
//   | "paddingRight"
//   | "paddingBottom"
//   | "paddingTop"
// type AttrMargin =
//   | "margin"
//   | "marginLeft"
//   | "marginRight"
//   | "marginBottom"
//   | "marginTop"
// type AttrShadow = "boxShadow"
// type AttrBorder =
//   | "border"
//   | "borderLeft"
//   | "borderRight"
//   | "borderBottom"
//   | "borderTop"
//   | "borderRadius"
// type AttrColor = "color" | "backgroundColor"
// type AttrFontText =
//   | "fontSize"
//   | "fontWeight"
//   | "fontFamily"
//   | "lineHeight"
//   | "verticalAlign"
// type AttrFlow = "overflow"
// type AttrMouseEvent = "cursor"

// type Custom = {
//   shadow?: string //boxShadowの色
//   borderByColor?: string //border Color から border全体定義
//   borderGray?: boolean //border set 1px solid #aaa
//   bgc?: string //background color
//   p?: number //padding size
//   m?: number //margin size
// }

// type Slide = {
//   closedWidth: string //閉まったsize
//   openedWidth: string //開いたsize
//   duration?: string //持続時間
//   delay?: string //遅延時間
//   easing?: //easing関数
//   | "ease"
//     | "ease-in-out"
//     | "ease-in"
//     | "ease-out"
//     | "linear"
//     | "step-start"
//     | "step-end"
//     | string
// } & Pick<CSSProperties, AttrPosition>

// type Div = Pick<
//   CSSProperties,
//   | AttrPosition
//   | AttrFlex
//   | AttrSize
//   | AttrPadding
//   | AttrMargin
//   | AttrBorder
//   | AttrShadow
//   | AttrColor
//   | AttrFontText
//   | AttrFlow
//   | AttrMouseEvent
// > &
//   Custom

// export const Div = styled.div<Div>`
//   ${(props) => css`
//     //position
//     ${props.position && `position: ${props.position}`};
//     ${props.top && `top: ${props.top}`};
//     ${props.right && `right: ${props.right}`};
//     ${props.bottom && `bottom: ${props.bottom}`};
//     ${props.left && `left: ${props.left}`};
//     ${props.zIndex && `zIndex: ${props.zIndex}`};
//     //flex
//     ${props.display && `display: ${props.display}`};
//     ${props.flexDirection && `flex-direction: ${props.flexDirection}`};
//     ${props.flexFlow && `flex-flow: ${props.flexFlow}`};
//     ${props.justifyContent && `justify-content: ${props.justifyContent}`};
//     ${props.alignItems && `align-items: ${props.alignItems}`};
//     ${props.gap && `gap: ${props.gap}`};
//     //size
//     ${props.width && `width: ${props.width}`};
//     ${props.minWidth && `min-width: ${props.minWidth}`};
//     ${props.maxWidth && `max-width: ${props.maxWidth}`};
//     ${props.height && `height: ${props.height}`};
//     ${props.minHeight && `min-height: ${props.minHeight}`};
//     ${props.maxHeight && `max-height: ${props.maxHeight}`};
//     //padding
//     ${props.padding && `padding: ${props.padding}`};
//     ${props.paddingTop && `padding-top: ${props.paddingTop}`};
//     ${props.paddingBottom && `padding-bottom: ${props.paddingBottom}`};
//     ${props.paddingLeft && `padding-left: ${props.paddingLeft}`};
//     ${props.paddingRight && `padding-right: ${props.paddingRight}`};
//     //margin
//     ${props.margin && `margin: ${props.margin}`};
//     ${props.marginTop && `margin-top: ${props.marginTop}`};
//     ${props.marginBottom && `margin-bottom: ${props.marginBottom}`};
//     ${props.marginLeft && `margin-left: ${props.marginLeft}`};
//     ${props.marginRight && `margin-right: ${props.marginRight}`};
//     //shadow
//     ${props.boxShadow && `box-shadow: ${props.boxShadow}`};
//     //border
//     ${props.border && `border: ${props.border}`};
//     ${props.borderTop && `border-top: ${props.borderTop}`};
//     ${props.borderBottom && `border-bottom: ${props.borderBottom}`};
//     ${props.borderLeft && `border-left: ${props.borderLeft}`};
//     ${props.borderRight && `border-right: ${props.borderRight}`};
//     ${props.borderRadius && `border-radius: ${props.borderRadius}`};
//     //overflow
//     ${props.overflow && `overflow: ${props.overflow}`};
//     //font
//     font-size: ${props.fontSize ?? "inherit"};
//     font-weight: ${props.fontWeight ?? "inherit"};
//     //font-family: ${props.fontFamily ?? "inherit"};
//     font-family: Consolas, monospace;
//     ${props.lineHeight && `lineHeight: ${props.lineHeight}`};
//     ${props.verticalAlign && `verticalAlign: ${props.verticalAlign}`};

//     //color
//     color: ${props.color ?? "inherit"};
//     ${props.backgroundColor && `background-color: ${props.backgroundColor}`};

//     //Custom(他の属性を上書き)
//     ${props.shadow && `box-shadow: 2px 2px ${props.shadow} #ddd`}; //Overwrite
//     ${props.borderByColor && `border: 1px solid ${props.borderByColor}`};
//     ${props.borderGray && `border: 1px solid #aaa`};
//     ${props.p && `padding: ${props.p}px`};
//     ${props.m && `margin: ${props.m}px`};
//     ${props.bgc && `background-color: ${props.bgc}`};
//     ${props.cursor && `cursor: ${props.cursor}`};
//   `}
// `

// //以下使用不可
// //${Object.entries(props).map(([key, value]) => key && `${key}:${value}`)}

// // export const Column = styled(Div)`
// //   display: flex;
// //   flex-direction: column;
// //   justify-content: ${({ $justifyContent = "flex-start" }) => $justifyContent};
// //   align-items: ${({ $alignItems = "flex-start" }) => $alignItems};
// //   border: ${({ $border }) => $border};
// // `
// // export const Column = styled(Div)`
// //   ${(props) => css`
// //     display: flex;
// //     flex-direction: column;
// //     justify-content: ${props.justifyContent ?? "flex-start"};
// //     align-items: ${props.alignItems ?? "flex-start"};
// //     ${props.border && `border: ${props.border}`};
// //     {...props}
// //   `}
// // `

// // export const Row = styled(Div)`
// //   ${({ justifyContent, alignItems, border }) => css`
// //     display: flex;
// //     flex-direction: row;
// //     justify-content: ${justifyContent ?? "flex-start"};
// //     align-items: ${alignItems ?? "flex-start"};
// //     ${border && `border: ${border}`};
// //     {...props}
// //   `}
// // `

// export const BorderDiv = styled(Div)`
//   ${(props) => css`
//     display: flex;
//     flex-direction: row;
//     justify-content: ${props.justifyContent ?? "center"};
//     align-items: ${props.alignItems ?? "center"};
//     border: 1px solid #aaa;
//     padding: 0.2rem;
//     width: ${props.width ?? "100px"};
//     height: ${props.height ?? "40px"};
//     color: grey;
//     background-color: #f5f5f5;
//     border-radius: 5px;
//     {...props}
//   `}
// `

// export const SlideWidth = styled(Div)<Slide>`
//   ${(props) => css`
//     position: ${props.position ?? "fixed"};
//     ${props.top && `top: ${props.top}`};
//     ${props.right && `right: ${props.right}`};
//     ${props.bottom && `bottom: ${props.bottom}`};
//     ${props.left && `left: ${props.left}`};
//     display: flex;
//     flex-direction: column;
//     width: ${props.closedWidth};
//     transition: width ${props.duration ?? "0.5s"}
//       ${props.easing ?? "ease-in-out"} ${props.delay ?? "250ms"};
//     &:hover {
//       width: ${props.openedWidth};
//     }
//     box-shadow: 2px 2px 10px #0004;
//     overflow: hidden;
//     {...props}
//   `}
// `

// export const Title = styled.div<Div>`
//   ${(props) => css`
//     :before {
//       content: "■";
//       margin-right: 5px;
//       color: ${props.color ?? "var(--main-color)"};
//     }
//     {...props}
//   `}
// `

// export const DivPre = styled.div<Div>`
//   ${(props) => css`
//   ${props.width && `width: ${props.width}`};
//     font-size: ${props.fontSize ?? "16px"};
//     overflow: auto;
//     white-space: pre;
//     ${props.border && `border: ${props.border}`};
//     ${props.padding && `padding: ${props.padding}`};
//     ${props.margin && `margin: ${props.margin}`};
//     {...props}
//   `}
// `

// export const Span = styled.span`
//   margin: 0;
//   padding: 0;
//   font-size: inherit;
//   font-family: Consolas, monospace;
// `

// export const SpanRed = styled.span`
//   margin: 0;
//   padding: 0;
//   color: var(--main-color);
//   font-size: inherit;
//   font-family: Consolas, monospace;
// `
