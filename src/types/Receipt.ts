export type ReceiptStatus = "Verified" | "Queue" | "Unable to verify"

export interface Receipt {
  guid: string
  status: ReceiptStatus
}
