import { AllKeyChains, NestedStringRecord } from "@/types/utils"

const getNestedString = (obj: NestedStringRecord, path: AllKeyChains<typeof obj>) => {
  let current: NestedStringRecord | string = obj
  const keys = path.split(".")
  for (const key of keys) {
    if (typeof current === "string") {
      break
    }
    if (key in current) {
      current = current[key]
    }
  }
  if (typeof current !== "string") {
    throw TypeError(`Can't find ${path} in ${JSON.stringify(obj)}`)
  }

  return current
}

export default getNestedString
