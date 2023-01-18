import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react'
import s from './SuperButton.module.css'

// тип пропсов обычной кнопки, children в котором храниться название кнопки там уже описан
type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement>

type SuperButtonPropsType = DefaultButtonPropsType & {
    xType?: string
}

const SuperButton: React.FC<SuperButtonPropsType> = (
    {
        xType,
        className,
        disabled,
        ...restProps // все остальные пропсы попадут в объект restProps, там же будет children
    }
) => {
    let finalClassName = s.button
    if (className) {
        finalClassName += ' ' + className
    }
    if (disabled) {
        finalClassName += ' ' + s.disabled
    } else if (xType === 'red') {
        finalClassName += ' ' + s.red
    } else if (xType === 'secondary') {
        finalClassName += ' ' + s.secondary
    } else {
        finalClassName += ' ' + s.default
    }
   // finalClassName className s.secondary


    // + (disabled
    //         ? s.disabled
    //         : xType === 'red'
    //             ? s.red
    // + (className ? ' ' + className : '') // задачка на смешивание классов


    return (
        <button
            disabled={disabled}
            className={finalClassName}
            {...restProps} // отдаём кнопке остальные пропсы если они есть (children там внутри)
        />
    )
}

export default SuperButton
