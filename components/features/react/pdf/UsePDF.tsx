import { UseReturnType } from "@/components/common/type/type"
import { Column } from "@/components/common/styleDiv"

import {
  PDFDownloadLink,
  //PDFViewer, --> Downloadが即座に開始する
  Page,
  Text,
  View,
  Font,
  Document,
  StyleSheet,
} from "@react-pdf/renderer"

//@ts-ignore
import fontRegular from "@assets/font/Nasu-Regular.ttf" //ttfファイル参照

import { sample } from "./sample"

/*
■ インストール
yarn add @react-pdf/renderer
*/

export function UsePDF(): UseReturnType {
  const title = `React-PDF(Next13では現状動作せず)`
  const subTitle = ``

  const jsx = <PDF />
  return {
    title,
    subTitle,
    code,
    options: [],
    jsx,
    codeKeyType: "JSTS",
  }
}

const PDF = () => {
  return (
    <Column padding="10px">
      <OutputComponent />
    </Column>
  )
}

const code = `■ インストール yarn add @react-pdf/renderer
 
import { PDFDownloadLink, Page, Text, View, Font, 
  Document, StyleSheet } from "@react-pdf/renderer"
import fontRegular from "../../../assets/font/Nasu-Regular.ttf"
import fontBold from "../../../assets/font/Nasu-Bold.ttf"
 
const style = StyleSheet.create({
  body: {
    fontSize: "11pt",
    textAlign: "left",
    padding: "3px",
  },
  view: {
    textAlign: "left",
    position: "absolute",
    top: "100px",
    left: "35px",
    width: "300px",
    height: "300px",
    borderWidth: "0.1mm",
    borderStyle: "solid",
  },
  title: { fontSize: "11pt", fontFamily: "Nasu-Bold" },
  subTitle: { fontSize: "8pt", fontFamily: "Nasu-Regular" },
  bodyText: { fontSize: "7pt", fontFamily: "Nasu-Regular" },
})
 
Font.register({ family: "Nasu-Regular", src: fontRegular })
Font.register({ family: "Nasu-Bold", src: fontBold })
Font.registerHyphenationCallback((word) =>
  Array.from(word).flatMap((char) => [char, ""])
)
 
const fileName = "sample1.pdf"
const sampleText = sample //from text file
 
const DocumentComponent = () => {
  return (
    <Document>
      <Page size="A4" orientation="landscape" style={style.body}>
        <View style={style.view}>
          <Text style={style.title}>1行目タイトル</Text>
          <Text style={style.subTitle}>サブタイトル文字列やや長め</Text>
          <Text style={style.bodyText}>{sampleText}</Text>
        </View>
      </Page>
    </Document>
  )
}
 
const OutputComponent = () => {
 return (
    <PDFDownloadLink document={<DocumentComponent />} fileName={fileName}>
      {({ loading }) => (loading ? "Loading..." : "Download PDF")}
    </PDFDownloadLink>
  )
}`

const style = StyleSheet.create({
  body: {
    fontSize: "11pt",
    textAlign: "left",
    padding: "3px",
  },
  view: {
    textAlign: "left",
    position: "absolute",
    top: "10px",
    left: "10px",
    width: "300px",
    height: "300px",
    padding: "8px",
    borderWidth: "0.1mm",
    //borderStyle: "solid",
  },
  title: { fontSize: "11pt", fontFamily: "Nasu-Bold" },
  subTitle: { fontSize: "8pt", fontFamily: "Nasu-Regular" },
  bodyText: {
    // width: "300px", 作用せず
    fontSize: "7pt",
    fontFamily: "Nasu-Regular",

    //以下、使用に意味無し
    // whiteSpace: "wrap",
    // hyphens: "none", //"none", "auto", "manual"
    // lineBreak: "normal", //"anywhere", "normal", "loose"
    // textDecoration: "none",
    // lineHeight: //使用不可！
    // justifyContent: 動作せず -> textAlign を使用すること
  },
})

Font.register({
  family: "Nasu-Regular",
  src: fontRegular,
})

//改行時のハイフン消去
Font.registerHyphenationCallback((word) =>
  Array.from(word).flatMap((char) => [char, ""])
)

const fileName = "sample1.pdf"

const DocumentComponent = () => {
  return (
    <Document>
      <Page size="A4" orientation="portrait" style={style.body}>
        <View style={style.view}>
          <Text style={style.title}>1行目タイトル</Text>
          <Text style={style.subTitle}>サブタイトル文字列やや長め</Text>
          <Text style={style.bodyText}>{sample}</Text>
        </View>
      </Page>
    </Document>
  )
}

const OutputComponent = () => {
  return (
    <PDFDownloadLink document={<DocumentComponent />} fileName={fileName}>
      {({ loading }) => (loading ? "Loading..." : "Download PDF")}
    </PDFDownloadLink>
  )
}

/*
// PDFをビューアーで表示する(動作せず)
<PDFViewer>
  <DocumentComponent />
</PDFViewer>
*/
