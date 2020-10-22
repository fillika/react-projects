import { IData } from "../components/pages/Cards/common/CardTemplate/types";

/**
 * Интерфейс для стейта для карт
 */
export interface IcardsState {
  cards: {
    credit: {
      mainCard: IData | null,
      secondCards: IData[] | null,
      showOther: boolean,
      showMoreInfo: boolean
    },
    debit: {
      mainCard: IData | null,
      secondCards: IData[] | null,
      showOther: boolean,
      showMoreInfo: boolean
    },
  }
}



type Actions = {
  type: 'GET_MAIN_CC_CARD' | 'SHOW_OTHER_CC_CARDS' | 'SHOW_MORE_ABOUT_CC',
  payload?: string
}

const initialState: IcardsState = {
  cards: {
    credit: {
      mainCard: null,
      secondCards: null,
      showOther: false,
      showMoreInfo: false,
    },
    debit: {
      mainCard: null,
      secondCards: null,
      showOther: false,
      showMoreInfo: false,
    },
  }
};

export const cardReducer = (state: IcardsState = initialState, action: Actions) => {
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

    case 'SHOW_OTHER_CC_CARDS': {
      return {
        ...state,
        cards: {
          ...state.cards,
          credit: {
            ...state.cards.credit,
            showOther: true,
          },
        }
      };
    }

    case 'SHOW_MORE_ABOUT_CC': {
      return {
        ...state,
        cards: {
          ...state.cards,
          credit: {
            ...state.cards.credit,
            showMoreInfo: true,
          },
        }
      };
    }

    default:
      return state;
  }
};