import { Button } from "@material-ui/core";
import React from "react";
import { useDispatch } from "react-redux";

export const MoreButton: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <div style={ { textAlign: 'center' } }>
      <Button
        style={ { color: '#1771e6', border: '1px solid #1771e6', fontWeight: 400 } }
        onClick={ () => dispatch({ type: 'SHOW_OTHER_CC_CARDS' }) }>Показать остальные карты</Button>
    </div>
  );
};