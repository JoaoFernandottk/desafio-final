import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import livro from '../public/header/livro.png';
import lupa from 'public/header/lupa.png';


export default function Header() {
    return(
            
<BrowserRouter>
<header className={s.Header}>
    <section className={s.logoHeader}>
        <img src={livro}/>
        <h1>Livros Vai na Web</h1>
    </section>
    <nav className={s.Header}>
        <ul>
            <li>
                <Link className={s.link} to="/">
                    Inicio
                </Link>
            </li>
            <li>
                <Link className={s.link} to="/livrosdoados">
                    livros doados
                </Link>
            </li>
            <li>
               <Link className={s.link} to="/querodoar">
                quero doar
               </Link> 
            </li>
        </ul>
    </nav>
    <section className={s.barradebusca}>
        <input type="search"
        name=""
        id=""
        placeholder="o que você procura?"
        />
        <button>
            <img src={lupa} alt="" />
        </button>

    </section>
</header>
<Routes>
    <Route path="/" element={<Inicio />} />
    <Route path="Livrosdoados" element={<Livrosdoados />} />
    <Route path="querodoar" element={<Querodoar />} />
</Routes>
</BrowserRouter>
        );
        
    }
