import { createContext } from "react"
import useTelephone

export type TelephoneStructure = {
  TelephoneContext: ReturnType<typeof useTelephone>
  sample: string

}

export const AppContext = createContext<TelephoneStructure>({} as TelephoneStructure)
