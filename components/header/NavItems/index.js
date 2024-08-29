import { Gift, PokerChip, Wallet, GameController } from "phosphor-react";
import {
  CurrencyDollarIcon,
  StarIcon,
  ChartBarIcon,
  GiftIcon,
  CubeTransparentIcon,
  LightBulbIcon,
  FireIcon,
  CheckBadgeIcon,
  PaperAirplaneIcon,
  ChevronDoubleRightIcon,
  SparklesIcon
} from "@heroicons/react/24/outline";
export const navItems = (t) => [
  {
    icon: <PokerChip className="h-6 w-6" />,
    class: "sub-casinos",
    label: t('Casinos'),
    href: "/casinos",
    subMenu: [
      { label: t("Crypto Casinos"), href: "/crypto-casinos", icon: <CubeTransparentIcon aria-hidden="true" className="h-6 w-6 menu-icon-color" /> },
      { label: t('Fast Withdrawal Casinos'), href: "/fast-withdrawal-casinos", icon: <LightBulbIcon aria-hidden="true" className="h-6 w-6 menu-icon-color" /> },
      { label: t('Live Casinos'), href: "/live-casinos", icon: <PaperAirplaneIcon aria-hidden="true" className="h-6 w-6 menu-icon-color" /> },
      { label: t('Newest Casinos'), href: "/newest-casinos", icon: <FireIcon aria-hidden="true" className="h-6 w-6 menu-icon-color" /> },
      { label: t('Top Certified Casinos'), href: "/top-certified-casinos", icon: <CheckBadgeIcon aria-hidden="true" className="h-6 w-6 menu-icon-color" /> },
      { label: t('Top Sports Casinos'), href: "/top-sports-casinos", icon: <ChevronDoubleRightIcon aria-hidden="true" className="h-6 w-6 menu-icon-color" /> },
    ],
  },
  {
    icon: <Gift className="h-6 w-6" />,
    class: "sub-bonuses",
    label: t("Bonuses"),
    href: "/bonuses",
    subMenu: [
      // { label: t("No Deposit Bonuses"), href: "/no-deposit-bonuses" },
      { label: t("Exclusive Bonuses"), href: "/exclusive-bonuses", icon: <StarIcon aria-hidden="true" className="h-6 w-6 menu-icon-color" />},
      { label: t("Deposit Bonuses"), href: "/deposit-bonuses", icon: <ChartBarIcon aria-hidden="true" className="h-6 w-6 menu-icon-color" />},
      { label: t("Welcome Bonuses"), href: "/welcome-bonuses", icon: <GiftIcon aria-hidden="true" className="h-6 w-6 menu-icon-color" />},
      // { label: t("No Wagering Bonuses"), href: "/no-wagering-bonuses" },
    ],
  },
  {
    icon: <Wallet className="h-6 w-6"/>,
    class: "sub-payments",
    label: t("All Payments"),
    href: "/payments",
    subMenu: [
      { label: t("Apple Pay"), href: "/payments/apple-pay", icon: <CurrencyDollarIcon aria-hidden="true" className="h-6 w-6 menu-icon-color" /> },
      { label: t("Bitcoin"), href: "/payments/bitcoin-casino", icon: <CurrencyDollarIcon aria-hidden="true" className="h-6 w-6 menu-icon-color" />  },
      { label: t("Ecopayz"), href: "/payments/ecopayz", icon: <CurrencyDollarIcon aria-hidden="true" className="h-6 w-6 menu-icon-color" />  },
      { label: t("Maestro"), href: "/payments/maestro", icon: <CurrencyDollarIcon aria-hidden="true" className="h-6 w-6 menu-icon-color" />  },
      { label: t("Mastercard"), href: "/payments/mastercard", icon: <CurrencyDollarIcon aria-hidden="true" className="h-6 w-6 menu-icon-color" />  },
      { label: t("Mobile Payments"), href: "/payments/mobile-payments", icon: <CurrencyDollarIcon aria-hidden="true" className="h-6 w-6 menu-icon-color" />  },
      { label: t("Muchbetter"), href: "/payments/muchbetter", icon: <CurrencyDollarIcon aria-hidden="true" className="h-6 w-6 menu-icon-color" />  },
      { label: t("Neosurf"), href: "/payments/neosurf", icon: <CurrencyDollarIcon aria-hidden="true" className="h-6 w-6 menu-icon-color" />  },
      { label: t("Neteller"), href: "/payments/neteller-casino", icon: <CurrencyDollarIcon aria-hidden="true" className="h-6 w-6 menu-icon-color" />  },
      { label: t("PayPal"), href: "/payments/paypal-casino", icon: <CurrencyDollarIcon aria-hidden="true" className="h-6 w-6 menu-icon-color" />  },
      { label: t("Paysafecard"), href: "/payments/paysafecard-casino", icon: <CurrencyDollarIcon aria-hidden="true" className="h-6 w-6 menu-icon-color" />  },
      { label: t("Pix"), href: "/payments/pix", icon: <CurrencyDollarIcon aria-hidden="true" className="h-6 w-6 menu-icon-color" />  },
      { label: t("Skrill"), href: "/payments/skrill-casino", icon: <CurrencyDollarIcon aria-hidden="true" className="h-6 w-6 menu-icon-color" />  },
      { label: t("Trustly"), href: "/payments/trustly", icon: <CurrencyDollarIcon aria-hidden="true" className="h-6 w-6 menu-icon-color" />  },
      { label: t("Visa"), href: "/payments/visa", icon: <CurrencyDollarIcon aria-hidden="true" className="h-6 w-6 menu-icon-color" />  },
    ],
  },
  {
    icon: <GameController className="h-6 w-6"/>,
    class: "sub-providers",
    label: t("Game Providers"),
    href: "/game-providers",
    subMenu: [
      { label: t("Amatic"), href: "/game-providers/amatic", icon: <SparklesIcon aria-hidden="true" className="h-6 w-6 menu-icon-color" />},
      { label: t("BGaming"), href: "/game-providers/bgaming", icon: <SparklesIcon aria-hidden="true" className="h-6 w-6 menu-icon-color" /> },
      { label: t("Boongo"), href: "/game-providers/boongo", icon: <SparklesIcon aria-hidden="true" className="h-6 w-6 menu-icon-color" /> },
      { label: t("Amusnet"), href: "/game-providers/amusnet", icon: <SparklesIcon aria-hidden="true" className="h-6 w-6 menu-icon-color" /> },
      { label: t("Evolution"), href: "/game-providers/evolution", icon: <SparklesIcon aria-hidden="true" className="h-6 w-6 menu-icon-color" /> },
      { label: t("Mascot"), href: "/game-providers/mascot", icon: <SparklesIcon aria-hidden="true" className="h-6 w-6 menu-icon-color" /> },
      { label: t("NeTent"), href: "/game-providers/netent", icon: <SparklesIcon aria-hidden="true" className="h-6 w-6 menu-icon-color" /> },
      { label: t("Nolimit city"), href: "/game-providers/nolimit-city", icon: <SparklesIcon aria-hidden="true" className="h-6 w-6 menu-icon-color" /> },
      { label: t("Play’n go"), href: "/game-providers/playn-go", icon: <SparklesIcon aria-hidden="true" className="h-6 w-6 menu-icon-color" /> },
      { label: t("Pragmatic Play"), href: "/game-providers/pragmatic-play", icon: <SparklesIcon aria-hidden="true" className="h-6 w-6 menu-icon-color" /> },
      { label: t("Push Gaming"), href: "/game-providers/push-gaming", icon: <SparklesIcon aria-hidden="true" className="h-6 w-6 menu-icon-color" /> },
      { label: t("Spinomenal"), href: "/game-providers/spinomenal", icon: <SparklesIcon aria-hidden="true" className="h-6 w-6 menu-icon-color" /> },
    ],
  },
];
