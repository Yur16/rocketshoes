import React from 'react';
import { MdRemoveCircleOutline, MdAddCircleOutline, MdDelete } from 'react-icons/md';

import { Container, ProductTable, Total } from './styles';

export default function Cart() {
  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>PRODUTO</th>
            <th>QTD</th>
            <th>SUBTOTAL</th>
            <tr />
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRgXYY93LRaViuO0CxQMTBcwltSC7blEpwGL6KM-oa7Ss6AlxU&usqp=CAE" alt="Tênis" />
            </td>
            <td>
              <strong>Tênis muito massa</strong>
              <span>R$ 129,90</span>
            </td>
            <td>
              <div>
                <button type="button">
                  <MdRemoveCircleOutline size={20} color="#7159c1" />
                </button>
                <input readOnly value={2} />
                <button type="button">
                  <MdAddCircleOutline size={20} color="#7159c1" />
                </button>
              </div>
            </td>
            <td>
              <strong>R$ 258,80</strong>
            </td>
            <td>
              <button type="button">
                <MdDelete size={20} color="#9159c1" />
              </button>
            </td>
          </tr>
        </tbody>
      </ProductTable>

      <footer>
        <button type="button">Finalizar pedido</button>

        <Total>
          <span>TOTAL</span>
          <strong>R$1999,60</strong>
        </Total>
      </footer>
    </Container>
  );
}