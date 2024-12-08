import { useAtom, Provider } from "jotai"
import { Input } from "@/components/common/styleInputChakra"
import { Flex } from "@chakra-ui/react"
import {
  atom_A,
  atom_B,
  atom_C,
  atom_D,
  atom_E,
  atom_F,
  atom_G,
  atom_H,
  atom_I,
  atom_J,
  atom_K,
  atom_L,
  atom_M,
} from "./atoms"
import { BoxT, BoxX, FlexX } from "./Commons"

export const ExcelChainedReaction1 = () => {
  const [cell_A, setCell_A] = useAtom(atom_A)
  const [cell_B] = useAtom(atom_B)
  const [cell_C] = useAtom(atom_C)
  const [cell_D] = useAtom(atom_D)
  const [cell_E] = useAtom(atom_E)
  const [cell_F] = useAtom(atom_F)
  const [cell_G] = useAtom(atom_G)
  const [cell_H] = useAtom(atom_H)
  const [cell_I] = useAtom(atom_I)
  const [cell_J] = useAtom(atom_J)
  const [cell_K] = useAtom(atom_K)
  const [cell_L] = useAtom(atom_L)
  const [cell_M] = useAtom(atom_M)

  const handleChangeA = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCell_A(Number(e.currentTarget.value))
  }
  return (
    <Provider>
      <Flex flexFlow="column" padding="5px" alignItems="flex-start" gap="0">
        <Input value={cell_A} onChange={handleChangeA} mb={3} />
        <FlexX>
          <BoxT>B</BoxT>
          <BoxX>A*2 = {cell_B}</BoxX>
        </FlexX>
        <FlexX>
          <BoxT>C</BoxT>
          <BoxX>B*2 = {cell_C}</BoxX>
        </FlexX>
        <FlexX>
          <BoxT>D</BoxT>
          <BoxX>B+C = {cell_D}</BoxX>
        </FlexX>
        <FlexX>
          <BoxT>E</BoxT>
          <BoxX>C+A = {cell_E}</BoxX>
        </FlexX>
        <FlexX>
          <BoxT>F</BoxT>
          <BoxX>B+E = {cell_F}</BoxX>
        </FlexX>
        <FlexX>
          <BoxT>G</BoxT>
          <BoxX>E+F = {cell_G}</BoxX>
        </FlexX>
        <FlexX>
          <BoxT>H</BoxT>
          <BoxX>G+A = {cell_H}</BoxX>
        </FlexX>
        <FlexX>
          <BoxT>I</BoxT>
          <BoxX>B+H = {cell_I}</BoxX>
        </FlexX>
        <FlexX>
          <BoxT>J</BoxT>
          <BoxX>I+A = {cell_J}</BoxX>
        </FlexX>
        <FlexX>
          <BoxT>K</BoxT>
          <BoxX>F+H = {cell_K}</BoxX>
        </FlexX>
        <FlexX>
          <BoxT>L</BoxT>
          <BoxX>H+G = {cell_L}</BoxX>
        </FlexX>
        <FlexX>
          <BoxT>M</BoxT>
          <BoxX>L+K = {cell_M}</BoxX>
        </FlexX>
      </Flex>
    </Provider>
  )
}
