import { rtkApi } from 'shared/api/rtkApi';

const recommendationsApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getRecommendationsList: build.query({
      query: (limit) => ({
        url: '/articles',
        params: {
          _limit: limit,
        },
      }),
    }),
  }),
});

export const useArticlesRecommedationsList =
  recommendationsApi.useGetRecommendationsListQuery;
