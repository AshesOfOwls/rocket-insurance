import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

const AddedIcons: any = [
  ...Object.entries(fas),
  ...Object.entries(fab),
];

const Icons: any = [];

AddedIcons.forEach((entry: any) => {
  Icons.push(entry[1]);
});

library.add(fas, fab);

export default Icons;
