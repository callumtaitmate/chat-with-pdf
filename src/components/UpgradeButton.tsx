'use client';
import useSubscription from "@/hooks/useSubscription";
import { Button } from "./ui/button";
import Link from "next/link";
import { Loader2Icon, Star, StarIcon } from "lucide-react";
import { createStripePortal } from "@/actions/createStripePortal";
import { useRouter } from "next/navigation";
import { useTransition } from "react";



export default function UpgradeButton() {
    const { hasActiveMembership, loading } = useSubscription();
    const [isPending, startTransition] = useTransition();
    const router = useRouter();


    const handleAccount = () => {
        startTransition(async () => {
            const stripePortalUrl = await createStripePortal();
            router.push(stripePortalUrl);

        })
    }

    if (!hasActiveMembership && !loading)
        return (<Button asChild variant="default" className="border-indigo-600">
            <Link href="/dashboard/upgrade"
            >
                Upgrade
                <StarIcon className="ml-3 fill-indigo-600 text-white" />
            </Link>

        </Button>)

    if (loading)
        return (<Loader2Icon className="animate-spin" />

        )

    return (
        <Button
            onClick={handleAccount}
            disabled={isPending}
            variant="default"
            className="border-indigo-600 bg-indigo-600"
        >
            {isPending ? (<Loader2Icon className="animate-spin" />) : (
                <p>
                    <span className="font-extrabold">PRO </span>
                    Account
                </p>

            )}
        </Button>
    )
}
