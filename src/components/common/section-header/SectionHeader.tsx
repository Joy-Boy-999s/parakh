import styles from "./SectionHeader.module.css";

type SectionHeaderProps = {
  label: string;
  title: string;
  description: string;
};

export function SectionHeader({ label, title, description }: SectionHeaderProps) {
  return (
    <header className={styles.header}>
      <p className={styles.label}>{label}</p>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
    </header>
  );
}
