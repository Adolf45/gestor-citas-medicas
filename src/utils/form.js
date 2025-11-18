

export const Form = () => {
  
    function HandleSubmit(e) {
        e.preventDefault();
        const data = new FormData(e.target);
        const value = Object.fromEntries(data.entries());

        return value;
    }

    return {HandleSubmit};
}
