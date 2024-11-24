import Pagina from '../components/template/Pagina';

/* eslint-disable @typescript-eslint/no-explicit-any */
export default function Layout(props: any) {
  return <Pagina>{props.children}</Pagina>;
}
