import * as React from 'react';

export const useShowHelp = () => React.useState<any>();
export type useShowHelpType = ReturnType<typeof useShowHelp>;
export type showHelpType = useShowHelpType[0]; // [x, useX] like in useState declarations
export type setShowHelpType = useShowHelpType[1]; 