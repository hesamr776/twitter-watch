import styles from "@/src/styles/Tab.module.css";

export default function Tab({ label, active, onClick }) {
  return (
    <div className={active ? styles.activeTab : styles.tab} onClick={onClick}>
      <p className={active ? styles.activeLabel : styles.label}>{label}</p>
    </div>
  );
}

export const Tabs = ({ children }) => {
  return <div className={styles.tabs}>{children}</div>;
};

export const Container = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};
