export default function Paginacao({ paginas, totalPaginas, leftClick, rightClick }) {
    
    return (
        <div className="paginacao">
            <button onClick={leftClick}>⇦</button>
            <p> Página {paginas} de {totalPaginas} </p>
            <button onClick={rightClick}>⇨</button>
        </div>
    )
}