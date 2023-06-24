import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const SvgComponent = () => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    style={{
      enableBackground: 'new 0 0 512 512',
    }}
    xmlSpace="preserve">
    <Path d="M448 224v-64h-32v64h-64v32h64v64h32v-64h64v-32zM160 224v64h90.528c-13.216 37.248-48.8 64-90.528 64-52.928 0-96-43.072-96-96s43.072-96 96-96c22.944 0 45.024 8.224 62.176 23.168l42.048-48.256C235.424 109.824 198.432 96 160 96 71.776 96 0 167.776 0 256s71.776 160 160 160 160-71.776 160-160v-32H160z" />
  </Svg>
);

export default SvgComponent;
