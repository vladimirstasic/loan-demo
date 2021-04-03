const AVAILABLE_OFFERS = [
  {
    id: "offer_1",
    direct_deposit_required: true,
    minimum_deposit: 15000,
    currency: "USD",
    expires: Date.now()
  },
  {
    id: "offer_2",
    direct_deposit_required: false,
    minimum_deposit: 1000,
    currency: "EUR",
    expires: Date.now()
  },
  {
    id: "offer_3",
    direct_deposit_required: true,
    minimum_deposit: 17000,
    currency: "GBP",
    expires: Date.now()
  },
  {
    id: "offer_4",
    direct_deposit_required: false,
    minimum_deposit: 23000,
    currency: "USD",
    expires: Date.now()
  },
  {
    id: "offer_5",
    direct_deposit_required: true,
    minimum_deposit: 4500,
    currency: "EUR",
    expires: Date.now()
  }
];

export default AVAILABLE_OFFERS;
