"use client";

import React, { useEffect, useState, useRef } from "react";
import { Trash, ShieldCheck, Users, FileText, Shield, File } from "lucide-react";
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";

import { useRouter } from "next/navigation";
import gsap from "gsap";
import toast from "react-hot-toast";

interface User {
  id: string;
  name?: string;
  email?: string;
  role: "USER" | "ADMIN";
}

interface Post {
  id: string;
  title: string;
}

interface Pdf {
  id: string;
  title: string;
}

const AdminDashboard = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [posts, setPosts] = useState<Post[]>([]);
  const [pdfs, setPdfs] = useState<Pdf[]>([]);
  const [view, setView] = useState<"all" | "users" | "admins" | "posts" | "pdfs">("all");
  const [sessionUser, setSessionUser] = useState<{ name?: string; email?: string; role?: string } | null>(null);
  const router = useRouter();
  const contentRef = useRef(null);

  useEffect(() => {
    const checkSession = async () => {
      const res = await fetch("/api/session");
      const session = await res.json();
      if (!session?.user || session.user.role !== "ADMIN") {
        router.push("/sign-in");
      } else {
        setSessionUser(session.user);
      }
    };

    checkSession();
  }, [router]);

  useEffect(() => {
    fetch("/api/users").then((res) => res.json()).then(setUsers);
    fetch("/api/posts").then((res) => res.json()).then(setPosts);
    fetch("/api/pdfs").then((res) => res.json()).then(setPdfs);
  }, []);

  useEffect(() => {
    if (contentRef.current) {
      gsap.fromTo(contentRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 });
    }
  }, [users, posts, pdfs, view]);

  const deleteUser = async (id: string) => {
    const userToDelete = users.find((u) => u.id === id);
    if (userToDelete?.email === sessionUser?.email && userToDelete?.name === sessionUser?.name) {
      alert("You cannot delete your own account.");
      return;
    }
    if (confirm("Are you sure you want to delete this user?")) {
      const res = await fetch(`/api/users/${id}`, { method: "DELETE" });
      if (res.ok) {
        setUsers(users.filter((user) => user.id !== id));
       
      }
    }
  };

const deletePdf = async (id: string) => {
  if (confirm("Are you sure you want to delete this PDF?")) {
    const res = await fetch(`/api/pdfs/${id}`, { method: "DELETE" });
    if (res.ok) {
      setPdfs(pdfs.filter((pdf) => pdf.id !== id));
      toast.success("PDF deleted successfully", {
        icon: <AiOutlineCheckCircle className="text-green-600 text-xl" />,
      });
    } else {
      toast.error("Failed to delete PDF", {
        icon: <AiOutlineCloseCircle className="text-red-600 text-xl" />,
      });
    }
  }
};


  const toggleAdmin = async (id: string, role: "USER" | "ADMIN") => {
    const userToChange = users.find((u) => u.id === id);
    if (userToChange?.email === sessionUser?.email && userToChange?.name === sessionUser?.name) {
      alert("You cannot change your own role.");
      return;
    }
    const newRole = role === "ADMIN" ? "USER" : "ADMIN";
    const res = await fetch(`/api/users/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ role: newRole }),
    });
    if (res.ok) {
      setUsers(users.map((user) => (user.id === id ? { ...user, role: newRole } : user)));
    }
  };

  const filteredUsers =
    view === "users"
      ? users.filter((u) => u.role === "USER")
      : view === "admins"
      ? users.filter((u) => u.role === "ADMIN")
      : users;

  return (
    <div className="p-6 font-inter bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-center text-blue-700">Admin Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
        <div
          className="bg-blue-600 text-white p-6 rounded-xl shadow hover:scale-105 transition cursor-pointer"
          onClick={() => setView("users")}
        >
          <h2 className="text-lg flex items-center gap-2">
            <Users size={20} /> Users
          </h2>
          <p className="text-4xl font-semibold">{users.filter((u) => u.role === "USER").length}</p>
        </div>
        <div
          className="bg-green-600 text-white p-6 rounded-xl shadow hover:scale-105 transition cursor-pointer"
          onClick={() => setView("admins")}
        >
          <h2 className="text-lg flex items-center gap-2">
            <Shield size={20} /> Admins
          </h2>
          <p className="text-4xl font-semibold">{users.filter((u) => u.role === "ADMIN").length}</p>
        </div>
        <div
          className="bg-purple-600 text-white p-6 rounded-xl shadow hover:scale-105 transition cursor-pointer"
          onClick={() => setView("posts")}
        >
          <h2 className="text-lg flex items-center gap-2">
            <FileText size={20} /> Posts
          </h2>
          <p className="text-4xl font-semibold">{posts.length}</p>
        </div>
        <div
          className="bg-indigo-600 text-white p-6 rounded-xl shadow hover:scale-105 transition cursor-pointer"
          onClick={() => setView("pdfs")}
        >
          <h2 className="text-lg flex items-center gap-2">
            <File size={20} /> PDFs
          </h2>
          <p className="text-4xl font-semibold">{pdfs.length}</p>
        </div>
      </div>

      <div ref={contentRef} className="overflow-x-auto bg-white p-4 rounded-xl shadow">
        {view === "posts" ? (
          <div>
            <h2 className="text-xl font-bold mb-4 text-gray-800">All Posts</h2>
            <ul className="space-y-2">
              {posts?.map((post) => (
                <li
                  key={post?.id}
                  className="border-b pb-2 cursor-pointer text-blue-700 hover:underline"
                  onClick={() => router.push(`/posts/${post?.id}`)}
                >
                  {post?.title} <span className="text-sm text-gray-500">({post?.id})</span>
                </li>
              ))}
            </ul>
          </div>
        ) : view === "pdfs" ? (
          <div>
            <h2 className="text-xl font-bold mb-4 text-gray-800">All PDFs</h2>
            <ul className="space-y-2">
              {pdfs?.map((pdf) => (
                <li key={pdf?.id} className="flex justify-between items-center border-b pb-2">
                  <span className="text-blue-700 hover:underline cursor-pointer" onClick={() => window.open(`/view-pdf/${pdf?.id}`, "_blank")}>{pdf?.title}</span>
                  <button onClick={() => deletePdf(pdf.id)} className="text-red-600 hover:underline flex items-center gap-1">
                    <Trash size={18} /> Delete
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <table className="min-w-full">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="py-3 px-4 border-b">Name</th>
                <th className="py-3 px-4 border-b">Email</th>
                <th className="py-3 px-4 border-b">Role</th>
                <th className="py-3 px-4 border-b">ID</th>
                <th className="py-3 px-4 border-b">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers?.map((user) => (
                <tr key={user?.id} className="hover:bg-gray-50">
                  <td className="py-3 px-4 border-b">{user?.name || "-"}</td>
                  <td className="py-3 px-4 border-b">{user?.email}</td>
                  <td className="py-3 px-4 border-b font-semibold">{user?.role}</td>
                  <td className="py-3 px-4 border-b text-xs text-gray-500">{user?.id}</td>
                  <td className="py-3 px-4 border-b flex gap-3">
                    <button
                      onClick={() => toggleAdmin(user.id, user.role)}
                      className={`hover:underline flex items-center gap-1 ${user.role === "ADMIN" ? "text-yellow-600" : "text-green-600"}`}
                    >
                      <ShieldCheck size={18} /> {user.role === "ADMIN" ? "Revoke Admin" : "Make Admin"}
                    </button>
                    <button
                      onClick={() => deleteUser(user.id)}
                      className="text-red-600 hover:underline flex items-center gap-1"
                    >
                      <Trash size={18} /> Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
