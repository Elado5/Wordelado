import * as React from 'react';

export const useStateExample = () => React.useState<any>();
export type useStateExampleType = ReturnType<typeof useStateExample>;
export type useStateType = useStateExampleType[0]; // [x, useX] like in useState declarations
export type setUseStateType = useStateExampleType[1]; 