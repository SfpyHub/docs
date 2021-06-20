import React, { useState } from 'react';
import { ZamTerminal, ColorMode, LineType } from '../Terminal'

export function BuildTerminal() {
  const [inputData, setInputData] = useState([
    {type: LineType.Input, value: 'curl --request POST \'https://api.sfpy.co/v1/order/link\' \\'},
    {type: LineType.Output, value: '--header \'X-SFPY-API-KEY: 8680d5613ba57f148d74eb86fa773dd7b5ee\' \\'},
    {type: LineType.Output, value: '--data-raw \'{\''},
    {type: LineType.Output, value: '\u00a0\u00a0"order_service": {'},
    {type: LineType.Output, value: '\u00a0\u00a0\u00a0\u00a0"order": {'},
    {type: LineType.Output, value: '\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0"address": "0x2dBbA03d27486885300187bEB4eb07b31318309e",'},
    {type: LineType.Output, value: '\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0"chain_id": 1,'},
    {type: LineType.Output, value: '\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0"purchase_total": {'},
    {type: LineType.Output, value: '\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0"sub_total": {'},
    {type: LineType.Output, value: '\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0"amount": 1000,'},
    {type: LineType.Output, value: '\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0"currency": "USD"'},
    {type: LineType.Output, value: '\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0}'},
    {type: LineType.Output, value: '\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0}'},
    {type: LineType.Output, value: '\u00a0\u00a0\u00a0\u00a0}'},
    {type: LineType.Output, value: '\u00a0\u00a0}'},
    {type: LineType.Output, value: '}\''}
  ]);

  const [outputData, setOutputData] = useState([
    {type: LineType.Output, value: '{'},
    {type: LineType.Output, value: '\u00a0\u00a0"data": "https://app.sfpy.co/#/pay?payment=C2BOBA0I7QKJLH0S4450"'},
    {type: LineType.Output, value: '}'}
  ])

  function onInput (input: string) {}

  return (
    <ZamTerminal
      name='Terminal #1' 
      inputData={ inputData } 
      outputData={ outputData }
      onInput={ onInput }
    />
  );
}
