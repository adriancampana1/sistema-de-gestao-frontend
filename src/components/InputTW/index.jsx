import React from 'react';
import { Input } from '@nextui-org/react';

export function InputTW() {
    return (
        <div className="flex w-full flex-wrap md:flex-nowrap gap-4 p-12px">
            <Input type="email" label="Email" placeholder="Enter your email" />
        </div>
    );
}
