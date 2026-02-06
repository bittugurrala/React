import { Trash2 } from 'lucide-react';

export default function DeleteIcon(){
    return(
        <div className='h-8 w-8 bg-blue-500 flex item-center justify-center items-center rounded-full'>
            <Trash2 size= {15} color='white'/>
        </div>
    )
}