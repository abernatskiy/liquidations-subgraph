import {
  LiquidationCall as LiquidationCallEvent
} from "../generated/aavev2pool/aavev2pool"
import {
  LiquidationCall
} from "../generated/schema"

export function handleLiquidationCall(event: LiquidationCallEvent): void {
  let entity = new LiquidationCall(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.collateralAsset = event.params.collateralAsset
  entity.debtAsset = event.params.debtAsset
  entity.user = event.params.user
  entity.debtToCover = event.params.debtToCover
  entity.liquidatedCollateralAmount = event.params.liquidatedCollateralAmount
  entity.liquidator = event.params.liquidator
  entity.receiveAToken = event.params.receiveAToken

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
