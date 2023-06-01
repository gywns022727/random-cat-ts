import axios from "axios";

interface GetCatsResponse {
  id: string;
  url: string;
  width: number;
  height: number;
}

export async function getCats(): Promise<GetCatsResponse[] | false> {
  try {
    const { data } = await axios.get<GetCatsResponse[]>(
      "https://api.thecatapi.com/v1/images/search?limit=10"
    );
    return data;
  } catch (error) {
    console.log(error);
    return false;
  }
}

export type { GetCatsResponse };
