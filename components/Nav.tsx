/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import {auth} from '../utils/firebase'
import { useAuthState } from "react-firebase-hooks/auth";


export default function Nav(){
  const [user, loading] = useAuthState(auth);
  //console.log(user);
  return (
    <nav className="flex justify-between items-center py-10 ml-10 mr-10">
      <Link href="/">
        <button className="text-lg font-medium">Creative Minds</button>
      </Link>
      <ul className="flex item-center gap-10">
        {!user && (
          <Link href={"/auth/login"}>
            <button className="py-2 px-4 text-sm bg-cyan-500 text-white rounded-lg font-medium ml-8">Join Now</button>
          </Link>
        )}
        {user && (
          <div className="flex item-center gap-6">
            <Link href="/post">
              <button className="font-medium bg-cyan-500 text-white py-2 px-4 rounded-mg textx-sm">Post</button>
            </Link>
            <Link href="/dashboard">
              <img src={user.photoURL} className="rounded-lg"/>
            </Link>
          </div>
        )}
      </ul>
    </nav>
  );
}