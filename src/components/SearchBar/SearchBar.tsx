import type {  FormEvent } from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import styles from './SearchBar.module.css';


interface SearchBarProps {
    onSubmit: (query: string) => void;
}

export const SearchBar = ({ onSubmit }: SearchBarProps) => {
    const [query, setQuery] = useState('');
  
    const handleSubmit = (e: FormEvent) => {
      e.preventDefault();
      if (!query.trim()) {
        toast.error('Please enter your search query.');
        return;
      }
      onSubmit(query);
    };
  
    return (
      <header className={styles.header}>
        <div className={styles.container}>
          <a className={styles.link} href="https://www.themoviedb.org/" target="_blank" rel="noopener noreferrer">
            Powered by TMDB
          </a>
          <form onSubmit={handleSubmit} className={styles.form}>
            <input
              className={styles.input}
              type="text"
              name="query"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              autoComplete="off"
              placeholder="Search movies..."
              autoFocus
            />
            <button className={styles.button} type="submit">Search</button>
          </form>
        </div>
      </header>
    );
  };