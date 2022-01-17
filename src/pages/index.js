import Head from 'next/head';
import { Header } from '../components/Header/Header';
import { WsStatus } from '../components/Status/Status';
import { Table } from '../components/Table/Table';
import styles from './Index.module.scss';

export const IndexPage = () => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Padaster Portal</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="favicon.ico" />
      </Head>
      <div className={styles.container}>
        <Header name={"Dmitriy Matviichuk"} />
        <WsStatus />
        <Table />
      </div>
    </>
  )
}

export default IndexPage;