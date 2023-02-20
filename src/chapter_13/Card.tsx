import {
  Card as MaterialCard,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import { ReactNode } from "react";

interface CardProps {
  title: string;
  backgroundColor: string;
  children: ReactNode;
}

const Card = ({ title, backgroundColor, children }: CardProps) => {
  return (
    <MaterialCard className={`w-96 ${backgroundColor}`}>
      <CardBody>
        {title && (
          <Typography variant="h4" color="blue-gray" className="mb-2">
            {title}
          </Typography>
        )}
        {children}
      </CardBody>
    </MaterialCard>
  );
};

export default Card;
