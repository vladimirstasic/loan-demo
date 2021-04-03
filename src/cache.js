import { InMemoryCache } from "@apollo/client";
import AVAILABLE_OFFERS from "./Constants/offers";

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        offers: {
          read() {
            return AVAILABLE_OFFERS;
          }
        }
      }
    }
  }
});

export default cache;
