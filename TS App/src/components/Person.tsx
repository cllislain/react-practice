import { ChangeEvent, FC, useState } from 'react';

// eslint-disable-next-line react-refresh/only-export-components
export enum HairColor {
  Blonde = "Your hair color is blonde, KAREN!",
  Brown = "Nice hair color",
  Pink = "Cool hair color"
}

 interface Props {
    name: string;
    age: number;
    email: string;
    hairColor: HairColor
}


export const Person: FC<Props> = ({name, age, email, hairColor}) => {

    const [country, setCountry] = useState<string | null>("")

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      setCountry(e.target.value)
    }

  return (
    <div className='details'>
      <span>{name}</span>
      <span>{age}</span>
      <span>{email}</span>
      <input 
      placeholder="What is your country? "
      type="text" 
      onChange={handleChange}/>
      <span>{country}</span>
      {hairColor}
    </div>
  );
}
