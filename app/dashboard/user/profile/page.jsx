import React from 'react'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers';

export const metadata = {
    title: "Profile"
}

const MyProfile = async () => {

    const cookieStore = cookies();
    const supabase = createServerComponentClient({ cookies: () => cookieStore })
    const { data: { user } } = await supabase.from("kedai").select();

    return (
        <div>

        </div>
    )
}

export default MyProfile