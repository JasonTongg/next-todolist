import styles from '../styles/Home.module.css';
import Todo from '../Components/Todo/Todo';

export default function Home(props) {
  return (
    <div className={styles.Container}>
      <Todo initialData={props.initialData} />
    </div>
  );
}

export const getStaticProps = async () => {
  return {
    props: {
      initialData: [
        {text: 'Jason', status: false, id: 1},
        {text: 'Toni', status: false, id: 2},
      ],
    },
  };
};
