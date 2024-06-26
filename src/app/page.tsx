"use client";
import { UserForm } from "@/components/Form";
import { Card } from "@/components/ui/card";
import { TableView } from "@/components/Table";
import { useState } from "react";
export default function Home() {
    const [data, setData] = useState<{ status: string; result: object }>({
        status: "loading",
        result: {},
    });
    return (
        <div>
            <main className="flex min-h-screen flex-col md:flex-row items-center justify-evenly">
                <Card
                    className="p-12 m-12 hide-on-print"
                    style={{ background: "#fff3" }}
                >
                    <UserForm data={data} setData={setData} />
                    <footer className="w-full border-t mt-4 py-4 text-gray-700">
                        Powered to you by &nbsp;
                        <p>
                            <a
                                className="underline"
                                href="https://github.com/satvikg7"
                            > 
                                SatvikG7
                            </a>{" "}
                            &{" "}
                            <a
                                className="underline"
                                href="https://github.com/adityasd314"
                            >
                                AdityaSD314
                            </a>
                        </p>
                    </footer>
                </Card>
                {data.status === "ok" ? (
                    <Card
                        className="p-6 m-6 overflow-auto"
                        style={{ background: "#fff3" }}
                    >
                        <TableView data={data} />
                    </Card>
                ) : (
                    ""
                )}
            </main>
        </div>
    );
}
