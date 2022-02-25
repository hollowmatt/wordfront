function Key({value, width=40}) {
    return(
        <div style={{width: `${width}px`, height: '58px'}} className="flex items-center justify-center rounded mx-0.5 text-xs font-bold cursor-pointer bg-slate-400 text-white border-2 border-ggray-900">
            {value}
        </div>
    );
}

export default Key;