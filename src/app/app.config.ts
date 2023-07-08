export const config: ApplicationConfiguration = {
  inPersonPricePerTenMinutes: 5,
  onlinePricePerTenMinutes: 4,
  perPupilDiscountAsPercent: 5,
  perSessionDiscountAsPercent: 2,
};

interface ApplicationConfiguration {
  inPersonPricePerTenMinutes: number;
  onlinePricePerTenMinutes: number;
  perPupilDiscountAsPercent: number;
  perSessionDiscountAsPercent: number;
}
