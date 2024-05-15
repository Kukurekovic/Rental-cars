import request, { gql } from "graphql-request";

export const getCarsList = async () => {
  const query = gql`
    query CarLists {
      carLists {
        carAvg
        createdAt
        id
        name
        price
        publishedAt
        updatedAt
        seat
        image {
          url
        }
        carType
        carBrand
      }
    }
  `;

  const result = await request(
    "https://api-eu-west-2.hygraph.com/v2/clw5vjr0m062t07uonuv7rxcs/master",
    query
  );

  return result;
};
