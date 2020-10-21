import { IData } from "../components/pages/Cards/common/CardTemplate/types";

/**
 * Интерфейс для стейта для карт
 */
export interface IcardsState {
  cards: {
    credit: {
      mainCard: IData | null,
      secondCards: IData[] | null
    },
    debit: {
      mainCard: IData | null,
      secondCards: IData[] | null
    },
  }
}

type Action = {
  type: "GET_MAIN_CC_CARD",
  payload: string
}

const initialState = {
  cards: {
    credit: {
      mainCard: null,
      secondCards: null
    },
    debit: {
      mainCard: null,
      secondCards: null
    },
  }
};

export const cardReducer = (state: IcardsState = initialState, action: Action) => {
  switch (action.type) {
    case 'GET_MAIN_CC_CARD': {
      return {
        ...state,
        cards: {
          ...state.cards,
          credit: {
            ...state.cards.credit,
            mainCard: action.payload,
          },
        }
      };
    }

    default:
      return state;
  }
};