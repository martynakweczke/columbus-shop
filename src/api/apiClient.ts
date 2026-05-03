import { ColumbusRecruitmentData } from "@/types/product";

const API_URL =
  "https://1jbod7rtr5.execute-api.eu-central-1.amazonaws.com/prod/exercise";
const API_KEY = "8865cb695d00c83c542790757b5e6ad08d47c3909cc652cc";

export const apiClient = {
  async getColumbusRecruitmentData(): Promise<ColumbusRecruitmentData> {
    const response = await fetch(API_URL, {
      headers: {
        "x-api-key": API_KEY,
      },
    });

    if (!response.ok) {
      throw new Error("Columbus recruitment data failed to load");
    }

    return response.json();
  },

  async addProductToCart(productId: string): Promise<boolean> {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.info(`Product ${productId} added to cart`);

        resolve(true);
      }, 600);
    });
  },
};
