import { Button } from "@/components/ui/button";
import { TableCell, TableRow } from "@/components/ui/table";
import { ArrowRight, Search, X } from "lucide-react";


export function OrderTableRow() {
    return (

        <TableRow>
            <TableCell>
                <Button variant="outline" size="sm">
                    <Search className="h-3 w-3" />
                    <span className="sr-only">Detalhes do pedido</span>
                </Button>
            </TableCell>
            <TableCell className="font-mono text-xs font-medium">
                123456789
            </TableCell>
            <TableCell className="text-muted-foreground">
                há 15 minutos
            </TableCell>
            <TableCell>
                <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-slate-400" />
                    <span className="font-medium text-muted-foreground">
                        Pendente
                    </span>
                </div>
            </TableCell>
            <TableCell className="font-medium">
                João Godoy
            </TableCell>
            <TableCell className="font-medium">
                R$ 150,50
            </TableCell>
            <TableCell>
                <Button variant="outline" size="sm">
                    <ArrowRight className="mr-2 h-3 w-3" />
                    Aprovar
                </Button>
            </TableCell>
            <TableCell>
                <Button variant="ghost" size="sm">
                    <X className="mr-2 h-3 w-3" />
                    Aprovar
                </Button>
            </TableCell>
        </TableRow>

    )
}