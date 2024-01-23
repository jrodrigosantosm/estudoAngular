<?php

namespace app\querys;

/**
 * This is the ActiveQuery class for [[UsuariosModel]].
 *
 * @see UsuariosModel
 */
class UsuariosQuery extends \yii\db\ActiveQuery
{
    /*public function active()
    {
        return $this->andWhere('[[status]]=1');
    }*/

    /**
     * {@inheritdoc}
     * @return UsuariosModel[]|array
     */
    public function all($db = null)
    {
        return parent::all($db);
    }

    /**
     * {@inheritdoc}
     * @return UsuariosModel|array|null
     */
    public function one($db = null)
    {
        return parent::one($db);
    }
}
