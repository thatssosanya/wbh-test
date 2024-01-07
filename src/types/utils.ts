export type NestedStringRecord = { [key: string]: string | NestedStringRecord }

type JoinKeys<K1, K2> = K1 extends string | number
  ? K2 extends string | number
    ? `${K1}${"" extends K2 ? "" : "."}${K2}`
    : never
  : never

export type AllKeyChains<T extends NestedStringRecord, Prefix extends string = ""> = {
  [K in keyof T]-?: K extends string
    ? T[K] extends NestedStringRecord
      ? JoinKeys<K, AllKeyChains<T[K], Prefix>>
      : `${Prefix}${K}`
    : never
}[keyof T]
