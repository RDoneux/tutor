export interface IPricingInfo{
    slotOne: IPricingItem,
    slotTwo: IPricingItem,
    slotThree: IPricingItem
}

interface IPricingItem {
    label: string,
    content: string
}